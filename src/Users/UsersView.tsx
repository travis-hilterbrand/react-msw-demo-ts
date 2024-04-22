import { Spinner } from "../Spinner";
import { useUsers } from "./useUsers";

export const UsersView = () => {
  const { isFetching, isError, users, refetch } = useUsers();
  return (
    <div>
      <h3 style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {"Users "}
        {isFetching && <Spinner />}
        {!isFetching && <button onClick={() => refetch()}>Refetch</button>}
      </h3>
      <pre>{JSON.stringify({ isFetching, isError })}</pre>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
