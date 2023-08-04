import axios, { AxiosError } from "axios";

//https://api-us-xle7.onrender.com

export const client = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 30000,
});

client.interceptors.request.use(async (config) => {
  return config;
});

client.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export function setDefaultToken(token: string) {
  client.defaults.headers.common["Authorization"] = `Beare ${token}`;
}
