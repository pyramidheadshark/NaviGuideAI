import { $host } from ".";

export const voicePush = async (voice: Blob) => {
  const formData = new FormData();
  formData.append("blob", voice, "voice.wav");
  const response = await $host.post("/", formData);
  return response;
};