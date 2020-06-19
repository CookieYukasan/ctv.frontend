import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://https://1ac84e399434.ngrok.io",
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
