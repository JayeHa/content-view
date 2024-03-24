import { GlobalHeader } from "@components/GlobalHeader";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex-center ">
      <div className="w-full max-w-GLOBAL_MAX_WIDTH h-screen">
        <GlobalHeader />
        <main className="mt-MAIN_MARGIN_TOP">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
