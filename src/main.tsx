import "@styles/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RouterClass } from "./router";

// async function enableMocking() {
//   const { worker } = await import("./mocks");
//   return worker.start();
// }

// enableMocking().then(() => {
//   ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   );
// });

const routerclass = new RouterClass();

export const pageRoutes = routerclass.pageRoutes;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routerclass.router} />
  </React.StrictMode>
);
