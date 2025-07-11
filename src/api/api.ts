import axios from "axios"

export const BASE_URL = "http://192.168.100.104:8000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

