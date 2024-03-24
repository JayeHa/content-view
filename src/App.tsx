import { RouterProvider } from "react-router-dom";

import { MainLayout } from "@layouts/MainLayout";
import { router } from "./router";

export const App = () => {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
};
