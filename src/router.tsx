import {
  ActionFunction,
  LoaderFunction,
  createBrowserRouter,
} from "react-router-dom";
import { App } from "./App";

/**
 * `PageComponent` 타입은 React 페이지 컴포넌트에 사용됩니다.
 *
 * - `pageName`: 페이지의 이름을 정의합니다. 이 이름은 헤더 네비게이션에 페이지를 추가할 때 사용됩니다.
 *
 * @example
 * 아래는 `pageName`을 사용하는 예시입니다.
 *
 * export default function ExamplePage() {
 *   return <div>Example Page</div>;
 * }
 * ExamplePage.pageName = "예시";
 */
type PageComponent = React.ComponentType & {
  pageName?: string;
};

interface RouteCommon {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType<unknown>;
}

interface IRoute extends RouteCommon {
  path: string;
  Element: PageComponent;
  pageName?: string;
}

interface Pages {
  [key: string]: {
    default: PageComponent;
    pageName?: string;
  } & RouteCommon;
}

const getRoutes = () => {
  const routes: IRoute[] = [];
  const pages: Pages = import.meta.glob("./pages/**/index.page.tsx", {
    eager: true,
  });

  for (const path of Object.keys(pages)) {
    const fileName = path.match(/\.\/pages\/(.*)\.page.tsx$/)?.[1];
    if (!fileName) {
      continue;
    }

    const normalizedPathName = fileName.includes("$")
      ? fileName.replace("$", ":")
      : fileName.replace(/\/index/, "");

    routes.push({
      path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
      Element: pages[path].default,
      pageName: pages[path].default.pageName,
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

const displayOrder = ["차트", "Whook", "이벤트", "뉴스", "스토어", "충전소"];

export const sortedPageRoutes = pageRoutes
  .filter(({ pageName }) => pageName != null)
  .sort(
    (a, b) =>
      displayOrder.indexOf(a.pageName!) - displayOrder.indexOf(b.pageName!)
  );
