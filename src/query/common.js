import { useQuery } from "@tanstack/react-query";
import { getListUser } from "@/services/common";

export const useUserList = (params) => useQuery(['user_list'], () => getListUser(params), {retry: false, refetchOnWindowFocus: false, retryOnMount: false});