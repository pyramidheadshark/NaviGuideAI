from speechkit import configure_credentials, creds


configure_credentials(
    yandex_credentials=creds.YandexCredentials(
        api_key='<ajebnrn6qfpquve6skvo>'
    )
)


from speechkit import model_repository
model = model_repository.synthesis_model()
model.voice = 'oksana'
result = model.synthesize('Привет мир!', raw_format=False)
result.export('ML/text_to_speech/tts_output', format='wav')



