import axios from "axios";
import {getToken} from "@/storage/Auth";

let BASE_PATH = "http://localhost:3003"
if (typeof window === "undefined") {
  BASE_PATH = 'http://localhost:8400';
}

const axiosInstance = axios.create({
  baseURL: `${BASE_PATH}`,
  timeout: 300000,
});

axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.authorization = `Bearer ${token}`; // eslint-disable-line
      }
      return config;
    },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => {
    return response?.data;
  },
  error => {
    if (error.response) {
      const { data, status } = error.response;
      if (data || status) {
        return Promise.reject(data)
      }
    }
    return Promise.reject(error)
  })

export default axiosInstance;
