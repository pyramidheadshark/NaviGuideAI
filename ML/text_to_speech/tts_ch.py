import os
import torch
from TTS.api import TTS
device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/zh-CN/baker/tacotron2-DDC-GST").to(device)


def process_and_save_audio(input_text, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    output_file = os.path.join(output_dir, f"tts_output{len(os.listdir(output_dir)) + 1}.wav")
    tts.tts_to_file(text=input_text, speaker_wav="dictor_zh.wav", file_path=output_file)


input_text = "透过这烟霭，在黯黯的水波里，又逗起缕缕的明漪。"
output_directory = "tts_output"
process_and_save_audio(input_text, output_directory)