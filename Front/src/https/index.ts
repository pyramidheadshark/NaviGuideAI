import axios from "axios";

const $host = axios.create({
  baseURL: "http://сервер",
});

export { $host };
