import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getTask } from "../Api/auth";

const useTask = () => {
  const { user, loading } = useAuth();
  const { data: task = [], isLoading } = useQuery({
    enabled: !loading && !! user?.email,
    queryKey: ["task"],
    queryFn: async () => await getTask(user?.email),
  });
  return [task, isLoading];
};
export default useTask;
