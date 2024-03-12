import torch
import time
from transformers import MT5ForConditionalGeneration, T5Tokenizer

model_name = "google/mt5-base"
tokenizer = T5Tokenizer.from_pretrained(model_name, legacy=True)
model = MT5ForConditionalGeneration.from_pretrained(model_name)


def summarize_text(text):
    inputs = tokenizer.encode("summarize: " + text, return_tensors="pt", max_length=512, truncation=True)
    summary_ids = model.generate(inputs, max_length=256, min_length=16, length_penalty=1.0, num_beams=1,
                                 early_stopping=False, return_dict=False)
    response = tokenizer.decode(summary_ids[0], skip_special_tokens=False)
    return response


test_text = ('Ecology plays a crucial role in the modern world as it directly impacts our health, well-being, and the future of the planet. Each year, environmental issues become more acute, and addressing them becomes vital for preserving biodiversity and sustainable development. Overall, ecology plays a crucial role in shaping a sustainable and healthy future for all inhabitants of the planet.')

start_time = time.time()
summary = summarize_text(test_text)
end_time = time.time()
execution_time = end_time - start_time
print(summary)
print(f"Execution time: {execution_time} seconds")