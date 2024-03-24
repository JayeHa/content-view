import { useQuery } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App = () => {
  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: () =>
      fetch("/test")
        .then((response) => response.json())
        .then((data) => data),
  });

  console.log(data);

  return <RouterProvider router={router} />;
};
