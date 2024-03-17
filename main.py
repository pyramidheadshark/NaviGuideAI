import time
from ML.summary_and_tag_selection.llama_summary_model import \
    llama_summary_model  # Format: [[tag, yandex_prompt, sub, subsub, llama_repeat_output, api_tag], user_input, language]
from ML.yandex_gpt.yandex_gpt_model import \
    yandex_gpt_model  # Format (answer, summarized_user_input, api_tag)
from ML.speech_to_text.speech_to_text import \
    process_and_save_audio  # Format: (input_audio) --> output_text; input_audio = "TestingStorage/Audio/obama_short.wav"
from ML.text_to_speech.tts_ru import \
    tts_ru  # Format: (text_to_synthesize) --> output_audio
from ML.text_to_speech.tts_en import \
    tts_en  # Format: (text_to_synthesize) --> output_audio


def output_audio_to_wav(output_audio, output_file_path):
    with open(output_file_path, "wb") as f:
        f.write(output_audio)


start_time = time.time()
# test = yandex_gpt_model(llama_summary_model("Где находится магазин чая неподалёку?"))
# test_audio_stt = process_and_save_audio("TestingStorage/Audio/obama_short.wav")
test_audio_tts_ru = tts_ru("Где находится магазин чая неподалёку?")
test_audio_tts_en = tts_en("Where is the tea shop near the mall?")
end_time = time.time()
execution_time = end_time - start_time
print(f"Execution time: {execution_time} seconds")  # "Test done")
output_audio_to_wav(test_audio_tts_ru, "TestingStorage/Audio/tts_ru.wav")
output_audio_to_wav(test_audio_tts_en, "TestingStorage/Audio/tts_en.wav")