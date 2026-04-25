import { apiClient } from "@shared/services/apiClient";
import { StaffResponse } from "../types/staff.types";
import { ApiResponse } from "@shared/types/common.types";

export const staffApi = {
  get: async (): Promise<ApiResponse<StaffResponse[]>> => {
    try {
      const response =
        await apiClient.get<ApiResponse<StaffResponse[]>>("/api/v1/users");
      return response.data;
    } catch (error) {
      console.error("Error fetching staff data:", error);
      throw error;
    }
  },
};
