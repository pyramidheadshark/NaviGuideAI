import requests


def ask_llama(context, prompt):
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
                "role": "user"
            }
        ],
        "temperature": 0.2,
        "top_p": 0.7,
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


print(ask_llama("test", "test"))
