import { sortedPageRoutes } from "@/router";
import { Link, useLocation } from "react-router-dom";

export const GlobalHeader = () => {
  const { pathname: currentPath } = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 max-w-GLOBAL_MAX_WIDTH mx-auto z-GNB bg-background">
      <div className="bg-white h-GNB_HEIGHT shadow-sm">
        <div className="flex-center h-full">
          <Link to="/">
            <h1 className="font-bold text-2xl pl-2">
              HANTEO{" "}
              <span className="text-sm font-semibold text-gray-400">
                chart.
              </span>
            </h1>
          </Link>
        </div>
      </div>

      <div className="bg-white h-LNB_HEIGHT shadow-sm mt-[1px]">
        <nav className="h-full">
          <ol className="flex gap-3 items-center h-full overflow-x-scroll pl-6">
            {sortedPageRoutes.map(({ path, pageName }) => (
              <li key={path} className="flex-shrink-0">
                <div
                  className={
                    currentPath === path ? "text-primary" : "text-black"
                  }
                >
                  <div className="">
                    <Link to={path}>
                      <p className="font-semibold px-2 text-lg">{pageName}</p>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
};
