import { useCallback } from "react";
import { fetchUsers } from "../services/users.api";
import { useQuery } from "@tanstack/react-query";

export const useUsers = (searchTerm: string) => {
  const fetchFn = useCallback(() => fetchUsers(searchTerm), [searchTerm]);

  return useQuery({
    queryKey: ["users", searchTerm], 
    queryFn: fetchFn,
    staleTime: 1000 * 60, // 1 min caching
  });
};