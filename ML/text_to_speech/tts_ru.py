import os
import subprocess
import time
from creds import token, folder_id

import requests

root_path = os.path.dirname(__file__)
target_path = 'c:\\_tmp\\_speechkit\\'

"""
Протухает через 12 часов не использования
yc iam create-token >> /home/web/token.txt
 
Кусок текста меньше 5000 симв
 
 
https://cloud.yandex.ru/docs/speechkit/tts/request#wav
https://cloud.yandex.ru/docs/speechkit/tts/request
https://cloud.yandex.ru/docs/speechkit/api-ref/grpc/tts_service
"""

def synthesize(text):
    url = 'https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize'
    headers = {'Authorization': 'Bearer ' + token,}

    data = {
        'folderId': folder_id,
        'text': text,
        'lang': 'ru-RU',
        # 'voice':'alena', # премиум - жрет в 10 раз больше денег
        'voice':'jane', # oksana
        'emotion':'evil',
        'speed':'1.1',
        # по умолчанию конвертит в oggopus, кот никто не понимает, зато занимат мало места
        'format': 'lpcm',
        'sampleRateHertz': 48000,
    }

    with requests.post(url, headers=headers, data=data, stream=True) as resp:
        if resp.status_code != 200:
            raise RuntimeError("Invalid response received: code: %d, message: %s" % (resp.status_code, resp.text))

        for chunk in resp.iter_content(chunk_size=None):
            yield chunk

def write_file(text):
    """
    Пишет чанки в вайл
    :param text:
    :return:
    """
    filename = str(int(time.time()))
    with open(target_path + filename + ".raw", "wb") as f:
        for audio_content in synthesize(text):
            f.write(audio_content)

    time.sleep(2)

    return filename

def convert(filename):
    """
    Для конверсии в wav
    :param filename:
    :return:
    """
    # собираю команду конвертации
    cmd = " ".join([
        root_path + "\sox\sox.exe",
        "-r 48000 -b 16 -e signed-integer -c 1",
        target_path + filename + ".raw",
        target_path + filename + ".wav",
        ])

    # выполняю команду конвертации
    subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)

def read_text():
    """
    Читаю текстовый файл
    :return:
    """
    with open("text.txt", "r", encoding="UTF-8") as f:
        text = f.read()

    return text


convert(write_file(read_text()))