import { useMutation } from "@tanstack/react-query";
import { ApiResponse } from "@shared/types/common.types";
import { authApi } from "../api/authApi";
import {
  LoginErrorResponse,
  LoginPayload,
  LoginResponse,
} from "../types/auth.types";

export default function useLogin() {
  const {
    mutate: mutateLogin,
    isPending: loginLoading,
    error: loginError,
  } = useMutation<ApiResponse<LoginResponse>, LoginErrorResponse, LoginPayload>(
    {
      mutationFn: authApi.login,
    },
  );

  return {
    mutateLogin,
    loginStatus: {
      loading: loginLoading,
      error: loginError,
    },
  };
}
