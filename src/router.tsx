import {
  ActionFunction,
  LoaderFunction,
  createBrowserRouter,
} from "react-router-dom";
import { App } from "./App";
import HomePage from "./pages";
import ChargePage from "./pages/charge";
import ChartPage from "./pages/chart";
import EventPage from "./pages/event";
import NewsPage from "./pages/news";
import StorePage from "./pages/store";
import WhookPage from "./pages/whook";

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

export const pageRoutes: IRoute[] = [
  {
    path: "/charge",
    pageName: "충전소",
    Element: ChargePage,
  },
  {
    path: "/chart",
    pageName: "차트",
    Element: ChartPage,
  },
  {
    path: "/event",
    pageName: "이벤트",
    Element: EventPage,
  },
  {
    path: "/",
    Element: HomePage,
  },
  {
    path: "/news",
    pageName: "뉴스",
    Element: NewsPage,
  },
  {
    path: "/store",
    pageName: "스토어",
    Element: StorePage,
  },
  {
    path: "/whook",
    pageName: "Whook",
    Element: WhookPage,
  },
];

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
