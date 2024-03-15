import os
import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/zh-CN/baker/tacotron2-DDC-GST").to(device)


def get_next_available_filename(output_dir):
    file_counter = 1
    output_file = os.path.join(output_dir, f"output_zh_{file_counter}.wav")
    while os.path.exists(output_file):
        file_counter += 1
        output_file = os.path.join(output_dir, f"output_zh_{file_counter}.wav")
    return output_file


def process_and_save_audio(input_text, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    output_file = get_next_available_filename(output_dir)
    tts.tts_to_file(text=input_text, speaker_wav="dictor_zh.wav", file_path=output_file)


input_text = (
    "圣彼得堡 - 俄罗斯的文化之都，拥有丰富的历史和建筑，美丽的桥梁和堤岸，白夜，厄尔米塔什博物馆，俄罗斯博物馆，彼得保罗要塞，宏伟的花园和公园。")

output_directory = "tts_output"
process_and_save_audio(input_text, output_directory)
