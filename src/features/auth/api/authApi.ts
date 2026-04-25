import { apiClient } from "@shared/services/apiClient";
import { LoginPayload } from "../types/auth.types";

export const authApi = {
  login: async ({ username, password }: LoginPayload) => {
    try {
      const response = await apiClient.post("/api/v1/auth/login", {
        username,
        password,
      });

      return response.data;
    } catch (error: any) {
      throw {
        message: error.response?.data?.message,
        status: error.response?.status,
      };
    }
  },
  getCurrentUser: async () => {
    try {
      const response = await apiClient.get("/api/v1/auth/me");
      return response.data;
    } catch (error: any) {
      throw {
        message: error.response?.data?.message,
        status: error.response?.status,
      };
    }
  },
};
