import Login from './components/login'
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    </div>
  )
}

export default App
