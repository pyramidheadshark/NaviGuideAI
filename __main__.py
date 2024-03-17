import time
from flask import Flask, request
from ML.summary_and_tag_selection.llama_summary_model import \
    llama_summary_model  # Format: [[tag, yandex_prompt, sub, subsub, llama_repeat_output, api_tag], user_input, language]
from ML.yandex_gpt.yandex_gpt_model import \
    yandex_gpt_model  # Format (answer, summarized_user_input, api_tag)
from ML.speech_to_text.speech_to_text import \
    process_and_save_audio  # Format: (input_audio) --> output_text; input_audio = "TestingStorage/Audio/obama_short.wav"
from ML.text_to_speech.tts_ru import \
    tts_ru  # Format: (input_text, output_directory) --> output_audio variable
from ML.text_to_speech.tts_en import \
    tts_en  # Format: (input_text, output_directory) --> output_audio variable
from ML.text_to_speech.tts_de import \
    tts_de  # Format: (input_text, output_directory) --> output_audio variable
from ML.text_to_speech.tts_zh import \
    tts_zh  # Format: (input_text, output_directory) --> output_audio variable


def output_audio_to_wav(output_audio, output_file_path):
    with open(output_file_path, "wb") as f:
        f.write(output_audio)


app = Flask(__name__)


@app.route('/', methods=['POST'])
def handle_request():
    input_text = request.json['text']
    result = "Test"
    return {'result': result}


if __name__ == '__main__':
    app.run(port=5000)
