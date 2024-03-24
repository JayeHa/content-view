import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const testKeys = {
  all: ["test"] as const,
  lists: () => [...testKeys.all, "list"] as const,
};

export const useFetchTestData = () =>
  useQuery({
    queryKey: testKeys.lists(),
    queryFn: () => axios.get("/test"),
  });

export const App = () => {
  const { data } = useFetchTestData();

  console.log(data);

  return <RouterProvider router={router} />;
};
