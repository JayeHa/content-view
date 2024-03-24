import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App = () => {
  useEffect(() => {
    fetch("/test")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <RouterProvider router={router} />;
};
