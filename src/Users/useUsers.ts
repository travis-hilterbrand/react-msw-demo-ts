import { useQuery } from "react-query";
import axios from "axios";

export type User = {
  id: string;
};
export type Users = ReadonlyArray<User>;

const getUsers = async (): Promise<Users> => {
  const response = await axios.get(`users`);
  return response.data;
};

export const useUsers = () => {
  useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
};
