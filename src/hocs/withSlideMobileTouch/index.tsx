import { useInitialScrollNavigate } from "@/hooks/useInitialScrollNavigate";
import { sortedPageRoutes } from "@/router";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import { SlideMobileTouch, SlideMobileTouchProps } from "./SlideMobileTouch";

type WithSlideMobileTouch = <P extends object>(
  Component: FC<P>,
  thresholdPercentage?: SlideMobileTouchProps["thresholdPercentage"]
) => FC<P>;

export const withSlideMobileTouch: WithSlideMobileTouch =
  (Component, thresholdPercentage = 30) =>
  (props) => {
    const navigate = useInitialScrollNavigate();
    const { pathname: currentPath } = useLocation();

    const currentIndex = sortedPageRoutes.findIndex(
      ({ path }) => path === currentPath
    );

    const handleSwipeAction = (direction: "left" | "right") => {
      const LAST_INDEX = sortedPageRoutes.length - 1;
      const FIRST_INDEX = 0;

      const prevIndex =
        currentIndex === FIRST_INDEX ? LAST_INDEX : currentIndex - 1;
      const nextIndex =
        currentIndex === LAST_INDEX ? FIRST_INDEX : currentIndex + 1;

      if (direction === "right") {
        const prev = sortedPageRoutes[prevIndex];
        navigate(prev?.path);
      }

      if (direction === "left") {
        const next = sortedPageRoutes[nextIndex];
        navigate(next?.path);
      }
    };

    return (
      <div className="overflow-x-hidden">
        <SlideMobileTouch
          onSwipe={handleSwipeAction}
          thresholdPercentage={thresholdPercentage}
        >
          <Component {...props} />
        </SlideMobileTouch>
      </div>
    );
  };
