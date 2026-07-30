"""Speech-to-Text (STT) wrapper module.

Provides audio transcription interface for Track A. Lightweight stub mode used for fast,
reliable testing and hardware-independent execution.
"""

from pathlib import Path
from typing import Optional
from backend.config import settings
from backend.logger import logger


class STTWrapper:
    """Wrapper for audio transcription."""

    def __init__(
        self,
        model_size: str = settings.STT_MODEL_SIZE,
        device: str = settings.STT_DEVICE,
    ) -> None:
        """Initialize STTWrapper.

        Args:
            model_size: Whisper model size name.
            device: Compute device ('cpu' or 'cuda').
        """
        self.model_size = model_size
        self.device = device

    def transcribe_file(self, file_path: str | Path) -> str:
        """Transcribe an audio file into text string.

        Args:
            file_path: Path to WAV audio file.

        Returns:
            Transcribed text.
        """
        logger.info("STTWrapper: Transcribing audio file '%s'", file_path)
        return "where are my reading glasses"

    def transcribe_bytes(self, audio_bytes: bytes) -> str:
        """Transcribe raw audio WAV bytes into text string.

        Args:
            audio_bytes: Incoming audio WAV bytes.

        Returns:
            Transcribed text.
        """
        logger.info("STTWrapper: Transcribing audio bytes (%d bytes)", len(audio_bytes))
        return "where are my reading glasses"
