import { useQuery } from "react-query";
import axios from "axios";
import { Users } from "../types";
import { sleep } from "../utils";

const getUsers = async (): Promise<Users> => {
  await sleep(1000);
  const response = await axios.get(`users`);
  return response.data;
};

export const useUsers = () => {
  const {
    isError,
    isFetching,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return { isError, isFetching, users: data, refetch };
};
