import os
from speechkit import model_repository, configure_credentials, creds


def initialize_model():
    configure_credentials(
        yandex_credentials=creds.YandexCredentials(
            api_key='AQVNy77ubT8699xuU_jVTZiGJRBdriaqUOOQcVeS'
        )
    )
    return model_repository.synthesis_model()


def synthesize_text(text, model):
    return model.synthesize(text, raw_format=False)


def save_audio(result, output_directory):
    output_audio = result.export(format='wav')
    output_file = os.path.join(output_directory, "output_audio.wav")

    with open(output_file, "wb") as f:
        f.write(output_audio)

    return output_file

import wave


def load_wav_to_variable(file_path):
    with wave.open(file_path, 'rb') as wav_file:
        frames = wav_file.readframes(wav_file.getnframes())
        return frames


def tts_ru(input_text, output_directory):
    model = initialize_model()
    result = synthesize_text(input_text, model)
    output_file = save_audio(result, output_directory)
    return load_wav_to_variable(output_file)
