import os
import torch
from TTS.api import TTS
device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/en/ljspeech/fast_pitch").to(device)


def process_and_save_audio(input_text, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    output_file = os.path.join(output_dir, f"tts_output{len(os.listdir(output_dir)) + 1}.wav")
    tts.tts_to_file(text=input_text, speaker_wav="dictor_en.wav", file_path=output_file)


input_text = "Your input text goes here"
output_directory = "tts_output"
process_and_save_audio(input_text, output_directory)