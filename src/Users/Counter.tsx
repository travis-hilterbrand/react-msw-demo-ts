import { Spinner } from "../Spinner";
import { useUsers } from "./useUsers";

export const Counter = () => {
  const { isFetching, isError, users } = useUsers();
  return (
    <div>
      <h3>
        {"Counter "}
        {isFetching && <Spinner />}
      </h3>
      <pre>{JSON.stringify({ isFetching, isError })}</pre>
      <div>{`Count (${users.length})`}</div>
    </div>
  );
};
