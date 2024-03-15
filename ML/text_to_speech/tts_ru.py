import os
from speechkit import model_repository, configure_credentials, creds


def initialize_model():
    configure_credentials(
        yandex_credentials=creds.YandexCredentials(
            api_key='AQVNy77ubT8699xuU_jVTZiGJRBdriaqUOOQcVeS'
        )
    )
    return model_repository.synthesis_model()
def get_next_output_file(output_folder):
    counter = 1
    output_file = os.path.join(output_folder, f'output_ru_{counter}.wav')
    while os.path.exists(output_file):
        counter += 1
        output_file = os.path.join(output_folder, f'output_ru_{counter}.wav')
    return output_file
def synthesize_text(text, model):
    return model.synthesize(text, raw_format=False)
def save_audio(result, output_file):
    result.export(output_file, format='wav')


output_folder = r'tts_output'
os.makedirs(output_folder, exist_ok=True)
model = initialize_model()
text_to_synthesize = ('Санкт-Петербург - культурная столица России, богатая история и архитектура, прекрасные мосты и '
                      'набережные, белые ночи, Эрмитаж, Российский музей, Петропавловская крепость, великолепные сады'
                      ' и парки.')
result = synthesize_text(text_to_synthesize, model)
output_file = get_next_output_file(output_folder)
save_audio(result, output_file)