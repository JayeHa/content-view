import { MainLayout } from "@layouts/MainLayout";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1분
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
