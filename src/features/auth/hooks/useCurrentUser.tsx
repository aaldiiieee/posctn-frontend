import { authApi } from "@features/auth/api/authApi";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const { data, isPending } = useQuery({
    queryKey: ["currentUser"],
    queryFn: authApi.getCurrentUser,
    enabled: false, // Disable automatic fetching on mount
  });

  return { data, isPending };
};
