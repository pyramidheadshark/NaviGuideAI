import torch
from TTS.api import TTS
device = "cuda" if torch.cuda.is_available() else "cpu"
print(TTS().list_models())
tts = TTS("tts_models/multilingual/multi-dataset/your_tts").to(device)

tts.tts_to_file(text="St. Petersburg, the former capital of the Russian Empire, is known for its beautiful architectural landmarks, majestic palaces, and famous bridges. The city is steeped in history, culture, and literature, and is also renowned for its museums, theaters, and music festivals. The northern capital of Russia inspires with its unique architectural appearance and distinctive atmosphere.", speaker_wav="diktor-uvajaemye-passajiry-poezd-skoro-otpravitsya__Pro-Sound.org_.wav", language="en", file_path="output.wav")