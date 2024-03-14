import os
import whisper


def process_and_save_audio(input_audio, output_dir):
    model = whisper.load_model("tiny")
    audio = whisper.load_audio(input_audio)
    audio = whisper.pad_or_trim(audio)
    mel = whisper.log_mel_spectrogram(audio).to(model.device)
    _, probs = model.detect_language(mel)
    detected_language = max(probs, key=probs.get)
    options = whisper.DecodingOptions()
    result = whisper.decode(model, mel, options)
    output_file = os.path.join(output_dir, f"output_{len(os.listdir(output_dir)) + 1}.txt")
    with open(output_file, "w") as file:
        file.write(result.text)


# Usage example
input_audio = "dictor.mp3"
output_directory = "stt_output"
process_and_save_audio(input_audio, output_directory)
print("Done!")
# import whisper
# model = whisper.load_model("tiny")
# audio = whisper.load_audio("dictor.mp3")
# audio = whisper.pad_or_trim(audio)
# mel = whisper.log_mel_spectrogram(audio).to(model.device)
# _, probs = model.detect_language(mel)
# print(f"Detected language: {max(probs, key=probs.get)}")
# options = whisper.DecodingOptions()
# result = whisper.decode(model, mel, options)
# print(result.text)
