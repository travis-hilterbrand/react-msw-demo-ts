import { QueryClient, QueryClientProvider } from "react-query";
import { Counter, UsersView } from "./Users";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h2>App</h2>
        <hr />
        <UsersView />
        <hr />
        <Counter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
