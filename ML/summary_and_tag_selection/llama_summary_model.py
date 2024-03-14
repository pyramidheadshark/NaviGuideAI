import requests
import toml


def extract_tags_plus_prompt(file_path="llama_summary_tags.toml"):
    with open(file_path, "r", encoding="utf-8") as file:
        data = toml.load(file)
        tags = data["tags"]
        prompt_parts = data["prompt_parts"]
    return [tags, prompt_parts]


def construct_list_of_tags(tags):  # Format: [tag, prompt, sub, subsub]
    list_of_tags = []
    shorten_list = []
    for sub in tags:
        for subsub in tags[sub]:
            local_list = [tags[sub][subsub]["tag"], tags[sub][subsub]["prompt"], sub, subsub,
                          tags[sub][subsub]["llama_repeat"]]
            list_of_tags.append(local_list)
            shorten_list.append(tags[sub][subsub]["tag"])
    return [list_of_tags, shorten_list]


def construct_prompt(prompt_parts, shorten_list, user_input):
    prompt = prompt_parts["prompt_part_1"] + user_input + prompt_parts["prompt_part_2"] + " ['" + " ".join(
        shorten_list).strip() + "']."
    return prompt


def search_by_tags(list_of_tags, response):
    for tag in list_of_tags:
        if tag[0] in response:
            return tag


def ask_llama(context, role="user"):
    invoke_url = "https://api.nvcf.nvidia.com/v2/nvcf/pexec/functions/0e349b44-440a-44e1-93e9-abe8dcb27158"
    fetch_url_format = "https://api.nvcf.nvidia.com/v2/nvcf/pexec/status/"

    headers = {
        "Authorization": "Bearer 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",
        "Accept": "application/json",
    }

    payload = {
        "messages": [
            {
                "content": context,
                "role": role
            }
        ],
        "temperature": 0.2,
        "top_p": 0.6,
        "max_tokens": 1024,
        "seed": 42,
        "stream": False
    }

    # re-use connections
    session = requests.Session()

    response = session.post(invoke_url, headers=headers, json=payload)

    while response.status_code == 202:
        request_id = response.headers.get("NVCF-REQID")
        fetch_url = fetch_url_format + request_id
        response = session.get(fetch_url, headers=headers)

    response.raise_for_status()
    return response.json()


def llama_summary_model(user_input):  # Format: [tag, prompt, sub, subsub], user_input
    tags, prompt_parts = extract_tags_plus_prompt()
    list_of_tags, shorten_list = construct_list_of_tags(tags)
    prompt = construct_prompt(prompt_parts, shorten_list, user_input)
    response = ask_llama(prompt)
    result = [search_by_tags(list_of_tags, response["choices"][0]["message"]["content"]), user_input]
    if result[0][4] != '':
        llama_repeat_prompt = result[0][4] + user_input
        result[0][4] = ask_llama(llama_repeat_prompt)["choices"][0]["message"]["content"]
    return result

print(llama_summary_model("Где находится магазин чая неподалёку?"))
