import requests
import ast
import time


def yandex_gpt_ask(prompt="Do not answer. It's a test", api_key="AQVN2L3Brv3dSuAGd78-534nR_5EWuMgQsORMtcE"):
    modelUri = "gpt://b1ghp7ek9a8v0c3e2qs0/yandexgpt-lite"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Api-Key {api_key}"
    }

    data = {
        "modelUri": modelUri,
        "completionOptions": {
            "stream": False,
            "temperature": 0.6,
            "maxTokens": "3000"
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
    #response = requests.post(url, headers=headers, json=data, stream=True)
    #for line in response.iter_lines():
    #    if line:
    #        output_line = ast.literal_eval(line.decode('utf-8'))
    #        print(output_line["result"]["alternatives"][0]["message"]["text"], end="\n\n\n")

    ### Testing streaming_time
    #start_time = time.time()
    #for line in response.iter_lines():
    #    if line:
    #        output_line = ast.literal_eval(line.decode('utf-8'))
    #        print(output_line["result"]["alternatives"][0]["message"]["text"], end="\n\n\n")
    #        current_time = time.time()
    #        elapsed_time = current_time - start_time
    #        print("Elapsed time:", elapsed_time)


def construct_yandex_gpt_prompt(tag, user_input): # Дополнить структуру после доьбавления промптов в тегах
    prompt = tag[1] + " " + user_input
    return prompt


print(yandex_gpt_ask())
print("end")
