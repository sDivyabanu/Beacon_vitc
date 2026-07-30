"""Main FastAPI application entrypoint for Second Mind Track A backend.

Mounts thin API endpoints delegating business logic to service layer modules.
"""

from contextlib import asynccontextmanager
from pathlib import Path
from typing import Optional
from fastapi import FastAPI, File, Form, Header, HTTPException, Request, UploadFile, status
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel

from backend.config import settings
from backend.constants import Confidence, EventType, Intent, ReminderType
from backend.llm_service import LLMService
from backend.logger import logger
from backend.prompt_manager import PromptManager
from backend.schemas import (
    AskResponse,
    HealthResponse,
    ReminderAckResponse,
    ReminderCheckResponse,
)
from backend.stores.memory_store import MemoryStore
from backend.stores.profile_store import ProfileStore
from backend.stores.schedule_store import ScheduleStore
from backend.stores.session_store import SessionStore
from backend.stt import STTWrapper
from backend.tts import TTSWrapper

from backend.agents.emergency_agent import EmergencyAgent
from backend.agents.memory_agent import MemoryAgent
from backend.agents.orchestrator import OrchestratorAgent
from backend.agents.qa_agent import QAAgent
from backend.agents.reminder_agent import ReminderAgent
from backend.agents.schedule_agent import ScheduleAgent

from backend.services.ask_service import AskService
from backend.services.health_service import HealthService
from backend.services.reminder_service import ReminderService


# ---------------------------------------------------------------------------
# Global Component Initialization (Dependency Injection Container)
# ---------------------------------------------------------------------------
memory_store = MemoryStore()
memory_store.seed_demo_data()

profile_store = ProfileStore()
schedule_store = ScheduleStore()
session_store = SessionStore()

prompt_mgr = PromptManager()
llm_service = LLMService()

stt_wrapper = STTWrapper()
tts_wrapper = TTSWrapper()

memory_agent = MemoryAgent(memory_store, profile_store, llm_service, prompt_mgr)
schedule_agent = ScheduleAgent(schedule_store, llm_service, prompt_mgr)
qa_agent = QAAgent(profile_store, llm_service, prompt_mgr)
emergency_agent = EmergencyAgent(profile_store, memory_store, llm_service, prompt_mgr)

orchestrator_agent = OrchestratorAgent(
    llm=llm_service,
    prompt_mgr=prompt_mgr,
    session_store=session_store,
    memory_agent=memory_agent,
    schedule_agent=schedule_agent,
    qa_agent=qa_agent,
    emergency_agent=emergency_agent,
)

reminder_agent = ReminderAgent(
    profile_store=profile_store,
    schedule_store=schedule_store,
    memory_store=memory_store,
    tts=tts_wrapper,
)

health_service = HealthService()
ask_service = AskService(orchestrator=orchestrator_agent, stt=stt_wrapper, tts=tts_wrapper)
reminder_service = ReminderService(reminder_agent=reminder_agent)


# ---------------------------------------------------------------------------
# FastAPI Lifespan (Startup/Shutdown)
# ---------------------------------------------------------------------------
@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifecycle manager to start and stop background timer threads."""
    logger.info("FastAPI: Starting background reminder thread...")
    reminder_service.start_agent()
    yield
    logger.info("FastAPI: Stopping background reminder thread...")
    reminder_service.stop_agent()


app = FastAPI(
    title="Second Mind Backend API",
    description="Track A Backend API for dementia ambient memory assistant",
    version="1.0.0",
    lifespan=lifespan,
)


class AskTextRequest(BaseModel):
    """Fallback JSON text request schema for testing /ask without audio."""

    transcript: str
    device_id: Optional[str] = settings.DEFAULT_DEVICE_ID


# ---------------------------------------------------------------------------
# API Routes
# ---------------------------------------------------------------------------

@app.get("/health", response_model=HealthResponse, tags=["Health"])
def get_health() -> HealthResponse:
    """Perform liveness and subsystem readiness check for demo verification."""
    return health_service.check_health()


@app.post("/ask", tags=["Active Care Loop"])
async def post_ask(
    request: Request,
    file: Optional[UploadFile] = File(None),
    transcript: Optional[str] = Form(None),
    x_device_id: Optional[str] = Header(None, alias="X-Device-ID"),
    return_json: bool = False,
):
    """Process incoming user question (WAV audio file, JSON transcript text, or Form data).

    Returns WAV audio file response with debug headers:
    - X-Transcript: Transcribed text
    - X-Intent: Classified intent category
    - X-Confidence: Computed confidence level
    - X-Reasoning: Natural language reasoning trace
    - X-Answer-Text: Natural language spoken response
    """
    device_id = x_device_id or settings.DEFAULT_DEVICE_ID

    ask_resp: AskResponse
    audio_path: str

    content_type = request.headers.get("content-type", "")

    if "application/json" in content_type:
        try:
            data = await request.json()
            input_text = data.get("transcript", "")
            dev_id = data.get("device_id", device_id)
            if not input_text:
                raise HTTPException(status_code=400, detail="Missing transcript in JSON body.")
            ask_resp, audio_path = ask_service.process_ask_text(input_text, device_id=dev_id)
        except Exception as e:
            if isinstance(e, HTTPException):
                raise e
            raise HTTPException(status_code=400, detail=f"Invalid JSON body: {e}")
    elif file is not None:
        audio_bytes = await file.read()
        ask_resp, audio_path = ask_service.process_ask_audio(audio_bytes, device_id=device_id)
    elif transcript is not None:
        ask_resp, audio_path = ask_service.process_ask_text(transcript, device_id=device_id)
    else:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Must provide audio file upload, form transcript, or JSON transcript body.",
        )

    headers = {
        "X-Transcript": ask_resp.transcript,
        "X-Intent": ask_resp.intent.value,
        "X-Confidence": ask_resp.confidence.value,
        "X-Reasoning": ask_resp.reasoning,
        "X-Answer-Text": ask_resp.answer_text,
    }

    if return_json:
        return JSONResponse(content=ask_resp.model_dump(mode="json"), headers=headers)

    p = Path(audio_path)
    if not p.exists():
        p = Path(tts_wrapper.synthesize_to_file(ask_resp.answer_text))

    return FileResponse(
        path=str(p),
        media_type="audio/wav",
        headers=headers,
    )


@app.get("/reminder/check", response_model=ReminderCheckResponse, tags=["Proactive Care Loop"])
def check_reminder() -> ReminderCheckResponse:
    """Poll for pending proactive reminders."""
    return reminder_service.check_reminder()


@app.post("/reminder/ack", response_model=ReminderAckResponse, tags=["Proactive Care Loop"])
def acknowledge_reminder() -> ReminderAckResponse:
    """Acknowledge and clear currently pending proactive reminder."""
    return reminder_service.acknowledge_reminder()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
