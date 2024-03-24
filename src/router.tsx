import {
  ActionFunction,
  LoaderFunction,
  createBrowserRouter,
} from "react-router-dom";
import { App } from "./App";

interface RouteCommon {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType<unknown>;
}

interface IRoute extends RouteCommon {
  path: string;
  Element: React.ComponentType<unknown>;
}

interface Pages {
  [key: string]: {
    default: React.ComponentType<unknown>;
  } & RouteCommon;
}

const getRoutes = () => {
  const routes: IRoute[] = [];
  const pages: Pages = import.meta.glob("./pages/**/*.tsx", { eager: true });

  for (const path of Object.keys(pages)) {
    const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
    if (!fileName) {
      continue;
    }

    const normalizedPathName = fileName.includes("$")
      ? fileName.replace("$", ":")
      : fileName.replace(/\/index/, "");

    routes.push({
      path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
      Element: pages[path].default,
      loader: pages[path]?.loader as LoaderFunction | undefined,
      action: pages[path]?.action as ActionFunction | undefined,
      ErrorBoundary: pages[path]?.ErrorBoundary,
    });
  }

  return routes;
};

export const pageRoutes = getRoutes();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pageRoutes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: <Element />,
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    })),
  },
]);
