import whisper
model = whisper.load_model("base")
result = model.transcribe("dictor.mp3")
print(result.text)