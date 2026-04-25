import { useQuery } from "@tanstack/react-query";
import { staffApi } from "../api/staffApi";
import { ApiResponse } from "@shared/types/common.types";
import { StaffResponse } from "../types/staff.types";

export const useGetStaff = () => {
  const { data, isLoading } = useQuery<ApiResponse<StaffResponse[]>>({
    queryKey: ["staff"],
    queryFn: () => staffApi.get(),
  });
  
  return { data, isLoading };
};
