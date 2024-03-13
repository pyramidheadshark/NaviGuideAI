from speechkit import Session, SpeechSynthesis

oauth_token = "y0_AgAAAABkdjsOAATuwQAAAAD-Hdg5AABCzRXdyfRP8KDY8wNXq30kAxuMcQ"
catalog_id = "b1ghp7ek9a8v0c3e2qs0"

# Экземпляр класса `Session` можно получать из разных данных
session = Session.from_yandex_passport_oauth_token(oauth_token, catalog_id)

# Создаем экземляр класса `SpeechSynthesis`, передавая `session`,
# который уже содержит нужный нам IAM-токен
# и другие необходимые для API реквизиты для входа
synthesizeAudio = SpeechSynthesis(session)

# Метод `.synthesize()` позволяет синтезировать речь и сохранять ее в файл
synthesizeAudio.synthesize(
    'out.wav', text='Привет мир!',
    voice='oksana', format='lpcm', sampleRateHertz='16000'
)

# `.synthesize_stream()` возвращает объект типа `io.BytesIO()` с аудиофайлом
audio_data = synthesizeAudio.synthesize_stream(
    text='Привет мир, снова!',
    voice='oksana', format='lpcm', sampleRateHertz='16000'
)