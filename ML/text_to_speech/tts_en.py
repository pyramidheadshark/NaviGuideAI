import os
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/en/ljspeech/fast_pitch").to(device)


def get_next_available_filename(output_dir):
    file_counter = 1
    while True:
        output_file = os.path.join(output_dir, f"output_en_{file_counter}.wav")
        if not os.path.exists(output_file):
            break
        file_counter += 1
    return output_file


def process_and_save_audio(input_text, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    output_file = get_next_available_filename(output_dir)
    tts.tts_to_file(text=input_text, speaker_wav="dictor_en.wav", file_path=output_file)
    return output_file


import wave


def load_wav_to_variable(file_path):
    with wave.open(file_path, 'rb') as wav_file:
        frames = wav_file.readframes(wav_file.getnframes())
        return frames


def tts_en(input_text, output_directory):
    output_file = process_and_save_audio(input_text, output_directory)
    return load_wav_to_variable(output_file)


'''
input_text = "Where is the tea shop near the mall?"
output_directory = "tts_output"
process_and_save_audio(input_text, output_directory)
'''