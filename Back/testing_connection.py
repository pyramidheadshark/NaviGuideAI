import requests

url = 'https://8d6f-176-59-55-144.ngrok-free.app/upload'
file = {'file': open('sound_test.wav', 'rb')}
resp = requests.post(url=url, files=file)
print(resp.json())