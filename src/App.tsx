import { QueryClient, QueryClientProvider } from "react-query";
import { Users } from "./Users";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h2>App</h2>
        <hr />
        <Users />
      </div>
    </QueryClientProvider>
  );
}

export default App;
