import requests
import ast
import time


def yandex_gpt_ask(prompt, api_key="AQVN2L3Brv3dSuAGd78-534nR_5EWuMgQsORMtcE"):
    modelUri = "gpt://b1ghp7ek9a8v0c3e2qs0/yandexgpt-lite"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Api-Key {api_key}"
    }

    data = {
        "modelUri": modelUri,
        "completionOptions": {
            "stream": False,
            "temperature": 0.25,
            "maxTokens": "4000"
        },
        "messages": [
            {
                "role": "user",
                "text": prompt
            }
        ]
    }

    url = "https://llm.api.cloud.yandex.net/foundationModels/v1/completion"

    response = requests.post(url, headers=headers, json=data)
    output_line = ast.literal_eval(response.text)["result"]["alternatives"][0]["message"]["text"]
    return output_line

    ### If streaming
    # response = requests.post(url, headers=headers, json=data, stream=True)
    # for line in response.iter_lines():
    #    if line:
    #        output_line = ast.literal_eval(line.decode('utf-8'))
    #        print(output_line["result"]["alternatives"][0]["message"]["text"], end="\n\n\n")

    ### Testing streaming_time
    # start_time = time.time()
    # for line in response.iter_lines():
    #    if line:
    #        output_line = ast.literal_eval(line.decode('utf-8'))
    #        print(output_line["result"]["alternatives"][0]["message"]["text"], end="\n\n\n")
    #        current_time = time.time()
    #        elapsed_time = current_time - start_time
    #        print("Elapsed time:", elapsed_time)


def construct_yandex_gpt_prompt(tag, user_input,
                                response_language):  # Дополнить структуру после добавления промптов в тегах
    prompt = tag[1] + " " + user_input + f"\nОТВЕЧАЙ ЯЗЫКЕ С ЯЗЫКОВ КОДОМ {response_language}"
    return prompt


def call_api(llama_output, api_tag):  # Дополнить
    return None


# llama result format  [[tag, yandex_prompt, sub, subsub, llama_repeat_output, api_tag], user_input, language]
def yandex_gpt_model(input_data, api_key="AQVN2L3Brv3dSuAGd78-534nR_5EWuMgQsORMtcE"):
    tag = input_data[0]
    response_language = input_data[2]
    api_tag = tag[5]
    llama_output = tag[4]
    user_input = input_data[1]

    prompt = construct_yandex_gpt_prompt(tag, user_input, response_language)
    if api_tag != "": call_api(llama_output, api_tag)
    return yandex_gpt_ask(prompt, api_key), llama_output, api_tag


# Тест
input_data_1 = [['Show/locate me the nearest object/organization',
             '        ТЫ ДОЛЖЕН ОТВЕТИТЬ МАКСИМАЛЬНО КРАТКО. ТВОЙ ОТВЕТ  ОБЯЗАТЕЛЬНО ДОЛЖЕН СОДЕРЖАТЬ ТОЛЬКО ФРАЗУ: "С радостью, открываю карту.".\n',
             'navigation', 'locate_nearest_object', 'Чайный магазин поблизости', ''],
            'Где находится магазин чая неподалёку?', 'ru']
input_data_2 = [['Tell/describe/write me a historical/culture story/history/place/event/building/person/object', '                ТЫ ИСТОРИЧЕСКИЙ АССИСТЕНТ-ГИД. ОТВЕЧАЙ В ИНФОСТИЛЕ, В ПОЛОЖИТЕЛЬНОМ ТОНЕ.".\n        ', 'other', 'other', '', ''], 'Расскажи мне о Петре первом', 'ru']
input_data_3 = [['Show/tell me a historical/culture story/history/place/event/building/person/object', '                ТЫ ИСТОРИЧЕСКИЙ АССИСТЕНТ-ГИД. ОТВЕЧАЙ В ИНФОСТИЛЕ, В ПОЛОЖИТЕЛЬНОМ ТОНЕ.".\n        ', 'other', 'other', '', ''], 'Erzähl mir von Peter dem Ersten', 'de']
print(yandex_gpt_model(input_data_3))
print("end")
