import requests


def get_country_from_language(language_code):
    # Dictionary mapping language codes to country codes
    language_to_country = {
        "en": "US",
        "ru": "RU",
        "fr": "FR",
        "de": "DE",
        "es": "ES",
        "it": "IT",
        "jp": "JP",
        "cn": "CN",
        "kr": "KR",
        "pt": "PT",
        "nl": "NL",
        "br": "BR",
        "au": "AU",
        "ca": "CA",
        "mx": "MX",
        "ch": "CH",
        "se": "SE",
        # Add more language to country mappings here
    }

    return language_to_country.get(language_code, "Unknown")


''' ИНСТРУКЦИЯ К ЗАПИСИ ЗАПРОСОВ
Текст поискового запроса. Прим.:
text=Дубайский Фонтан
text=25.197091, 55.274259
text=Дубай, Мухаммед Бин Рашид бульвар, 1
text=+971 4 8888888
text=Дубай Молл


Типы возвращаемых результатов. Возможные значения:
geo — топонимы;
biz — организации;

ll:
Центр области поиска. Определяется с помощью долготы и широты, разделенных запятой. Долгота и широта указываются в градусах, представленных в виде десятичной дроби.
Используется совместно с параметром spn, определяющим размеры области поиска.
Игнорируется при обратном геокодировании.
Пример: ll=55.276394,25.195679&spn=0.552069,0.400552

spn:
Размеры области поиска. Определяется с помощью протяженностей по долготе и широте, разделенных запятой. Протяженности указываются в градусах, представленных в виде десятичной дроби.
Используется совместно с параметром ll, определяющим центр области поиска.
Игнорируется при обратном геокодировании.
Пример: ll=55.276394,25.195679&spn=0.552069,0.400552




Пример:
https://search-maps.yandex.ru/v1/?apikey=aa88d40d-788c-4a54-bd01-1304da613185&text=Rostic%27s&lang=ru_RU&ll=55.789983,%2037.678523&spn=0.010000,%200.010000&results=5
'''


def call_api(object_text, language, coord_dolg, coord_shir, plus_dolg="0.015000", plus_shir="0.015000",
             api_key="aa88d40d-788c-4a54-bd01-1304da613185"):
    url = "https://search-maps.yandex.ru/v1/?apikey=" + api_key + "&text=" + object_text + "&lang=" + language + "&ll=" + coord_dolg + ", " + coord_shir + "&spn=" + plus_dolg + ", " + plus_shir + "&results=5&rspn=1"
    response = requests.get(url)
    return response.json(), url


# Тест:
test = call_api("Rostic's", "ru_RU", "55.789983", "37.678523")
print(test, end="\n\n\n\n")
