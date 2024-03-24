import { pageRoutes } from "@/router";
import { Link, useLocation } from "react-router-dom";

export const GlobalHeader = () => {
  const { pathname: currentPath } = useLocation();
  const filteredPageRoutes = pageRoutes.filter(
    ({ pageName }) => pageName != null
  );

  return (
    <header className="fixed inset-x-0 top-0 max-w-GLOBAL_MAX_WIDTH mx-auto">
      <div className="bg-white h-GNB_HEIGHT shadow-sm">
        <nav>
          <ol className="flex gap-3">
            {filteredPageRoutes.map(({ path, pageName }) => (
              <li
                className={currentPath === path ? "text-primary" : "text-black"}
                key={path}
              >
                <Link to={path}>{pageName}</Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
};
