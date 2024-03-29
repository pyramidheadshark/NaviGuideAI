import os
import whisper
from pydub import AudioSegment
from pydub.utils import which

# Устанавливаем путь к ffmpeg, если он еще не установлен
AudioSegment.converter = which("ffmpeg")


def convert_to_mp3(input_audio):
    sound = AudioSegment.from_file(input_audio)
    output_audio = sound.export(format="mp3")
    return output_audio


def is_mp3_file(input_audio):
    _, ext = os.path.splitext(input_audio)
    return ext.lower() == ".mp3"


def process_and_save_audio(input_audio):
    # Конвертируем входное аудио в mp3
    if not is_mp3_file(input_audio):
        mp3_audio = input_audio
    else:
        mp3_audio = convert_to_mp3(input_audio)
    model = whisper.load_model("tiny")
    audio = whisper.load_audio(mp3_audio)
    audio = whisper.pad_or_trim(audio)
    mel = whisper.log_mel_spectrogram(audio).to(model.device)
    _, probs = model.detect_language(mel)
    detected_language = max(probs, key=probs.get)
    options = whisper.DecodingOptions()
    result = whisper.decode(model, mel, options)
    # output_file = os.path.join(output_dir, f"output_{len(os.listdir(output_dir)) + 1}.txt")
    # with open(output_file, "w", encoding='utf-8') as file:
    #    file.write(result.text)
    output_text = result.text
    return output_text


# Пример использования
'''
input_audio = "output_de_2.wav"
output_directory = "stt_output"
process_and_save_audio(input_audio, output_directory)
'''