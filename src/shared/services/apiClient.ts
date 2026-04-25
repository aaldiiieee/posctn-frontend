import axios from "axios";
import { ENV } from "@shared/config/env";
import { tokenStorage } from "@shared/lib/tokenStorage";
import { router } from "expo-router";

export const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 10_000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(async (config) => {
  const token = await tokenStorage.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    // if (error.response?.status === 401) {
    //   await tokenStorage.clear();
    //   router.replace("/(auth)/login");
    // }
    return Promise.reject(error);
  }
);
