"""Text-to-Speech (TTS) wrapper module.

Provides speech synthesis interface for Track A. Lightweight stub mode generates clean
WAV audio files instantly for endpoint and device playback.
"""

import uuid
import wave
import struct
from pathlib import Path
from typing import Optional
from backend.config import settings
from backend.logger import logger


class TTSWrapper:
    """Wrapper for offline speech synthesis."""

    def __init__(self, output_dir: Optional[Path] = None) -> None:
        """Initialize TTSWrapper.

        Args:
            output_dir: Optional directory path to store generated audio files.
        """
        self.output_dir = output_dir or settings.AUDIO_OUTPUT_DIR
        self.output_dir.mkdir(parents=True, exist_ok=True)

    def synthesize_to_file(
        self, text: str, output_path: Optional[str | Path] = None
    ) -> str:
        """Synthesize text answer into a WAV audio file.

        Args:
            text: Text string to synthesize.
            output_path: Optional output file path.

        Returns:
            Absolute string path to synthesized WAV audio file.
        """
        if output_path:
            file_path = Path(output_path)
        else:
            filename = f"answer_{uuid.uuid4().hex[:8]}.wav"
            file_path = self.output_dir / filename

        self._create_wav_file(file_path)
        logger.info("TTSWrapper: Synthesized audio for '%s' -> '%s'", text, file_path)
        return str(file_path)

    def _create_wav_file(self, file_path: Path) -> None:
        """Generate a valid 1-second 16kHz mono WAV file.

        Args:
            file_path: Target output path.
        """
        sample_rate = 16000
        duration = 1.0
        num_samples = int(sample_rate * duration)

        file_path.parent.mkdir(parents=True, exist_ok=True)
        with wave.open(str(file_path), "wb") as wav_file:
            wav_file.setnchannels(1)
            wav_file.setsampwidth(2)
            wav_file.setframerate(sample_rate)
            data = struct.pack("<" + "h" * num_samples, *([0] * num_samples))
            wav_file.writeframes(data)
