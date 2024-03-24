import { GlobalHeader } from "@components/GlobalHeader";
import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex-center ">
      <div className="w-full max-w-GLOBAL_MAX_WIDTH h-screen">
        <GlobalHeader />
        <main className="mt-MAIN_MARGIN_TOP pt-4 bg-white">{children}</main>
      </div>
    </div>
  );
};
