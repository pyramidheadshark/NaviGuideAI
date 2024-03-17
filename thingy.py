import os, sys, signal, json, requests

base_url = "http://localhost:8011"
player = "/World/audio2face/Player"
fullface_core = "/World/audio2face/CoreFullface"


# Check Status
status = requests.get(base_url + "/status").json()
if status != "OK":
    print("ERROR: " + status)
    return False


# Request .usd
data = { "file_name": "Path/to/file.usd" }
response = (requests.get(base_url + "A2F/USD/Load", json=data)).json()


# Set root track path
data = { "a2f_player": player, "dir_path": os.path.join(base_dir, root_path) }
response = (requests.post(base_url + "/A2F/Player/SetRootPath", json=data)).json()


# Set track to the last track available
data = { "a2f_player": player }
response = (requests.post(base_url + "/A2F/Player/GetTracks", json=data)).json()
last_track = response["result"][-1]

data = { "a2f_player": player, "file_name": last_track }
response = (requests.post(base_url + "/A2F/Player/SetTrack", json=data)).json()


# Generate Emotion keys
data = { "a2f_instance" }
response = (requests.post(base_url + "/A2F/Player/GenerateKeys", json=data)).json()


# Export data to cache
Data = {
    "meshes": ["/World/male_fullface/char_male_model_hi/c_headWatertight_hi"]
    "export_directory": os.path.join(base_dir, out_path),
    "file_name": out_prefix,
    "cache_type" "usd",
    "xform_keys": False,
    "batch": False,
    "fps": 20
}
response = (
    requests.post(base_url+"/A2F/Exporter/ExportGeometryCache", json=Data)
).json()