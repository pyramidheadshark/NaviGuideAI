import { $host } from ".";


export const voicePush = async (voice: Blob) => {
  const response = await $host.post("api/user/login", { voice });
  return response;
};