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


def save_audio_to_variable(result):
    output_audio = result.export(format='wav')
    return output_audio


def tts_ru(text_to_synthesize):
    model = initialize_model()
    result = synthesize_text(text_to_synthesize, model)
    output_audio = save_audio_to_variable(result)

    return output_audio
