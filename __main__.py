import time
import json
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from ML.speech_to_text.speech_to_text import get_latest_file_in_dir
from ML.summary_and_tag_selection.llama_summary_model import \
    llama_summary_model  # Format: [[tag, yandex_prompt, sub, subsub, llama_repeat_output, api_tag], user_input, language]
from ML.yandex_gpt.yandex_gpt_model import \
    yandex_gpt_model  # Format (answer, summarized_user_input, api_tag)
from ML.speech_to_text.speech_to_text import \
    process_and_save_audio  # Format: (input_audio) --> output_text"
from ML.text_to_speech.tts_ru import \
    tts_ru  # Format: (input_text, output_directory) --> output_audio variable
from ML.text_to_speech.tts_en import \
    tts_en  # Format: (input_text, output_directory) --> output_audio variable
from ML.text_to_speech.tts_de import \
    tts_de  # Format: (input_text, output_directory) --> output_audio variable
from ML.text_to_speech.tts_zh import \
    tts_zh  # Format: (input_text, output_directory) --> output_audi`o variable


def output_audio_to_wav(output_audio, output_file_path):
    with open(output_file_path, "wb") as f:
        f.write(output_audio)


app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 32 * 1024 * 1024  # Например, установите максимальный размер в 16MB
CORS(app)


@app.route('/', methods=['POST'])
def handle_request(stt_output=None):
    file = request.files['blob']
    file_path = os.path.join('ML', 'speech_to_text', 'stt_input', file.filename)
    file.save(file_path)
    process_and_save_audio(file_path)
    latest_file = get_latest_file_in_dir('ML/speech_to_text/stt_output')
    print(file_path)


    if latest_file is not None:
        with open(latest_file, 'r', encoding='utf-8') as file:
            result = file.read()
    else:
        result = "No files found in 'stt_output' directory."
    print(result)

    llama_data = llama_summary_model(result) # Format: [[tag, yandex_prompt, sub, subsub, llama_repeat_output, api_tag], user_input, language]
    api_tag, language = llama_data[0][5], llama_data[2] # 1. Какие апи вызывать. 2. Язык запроса
    yandex_data = yandex_gpt_model(llama_data) # Format (answer, summarized_user_input, api_tag)
    chat_response, maps_input = yandex_data[0], yandex_data[1] # Ответ для чата. 2. Запрос для карт

    response = {'message': result, 'chat_response': chat_response, 'maps_input': maps_input}
    return json.dumps(response)



if __name__ == '__main__':
    app.run(port=5000)
