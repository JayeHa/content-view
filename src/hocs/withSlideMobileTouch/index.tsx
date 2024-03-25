import { filteredPageRoutes } from "@/router";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlideMobileTouch, SlideMobileTouchProps } from "./SlideMobileTouch";

type WithSlideMobileTouch = <P extends object>(
  Component: FC<P>,
  thresholdPercentage?: SlideMobileTouchProps["thresholdPercentage"]
) => FC<P>;

const THRESHOLD_PERCENTAGE = 50;

export const withSlideMobileTouch: WithSlideMobileTouch =
  (Component, thresholdPercentage = THRESHOLD_PERCENTAGE) =>
  (props) => {
    const navigate = useNavigate();
    const { pathname: currentPath } = useLocation();

    const currentIndex = filteredPageRoutes.findIndex(
      ({ path }) => path === currentPath
    );

    const handleSwipeAction = (direction: "left" | "right") => {
      const LAST_INDEX = filteredPageRoutes.length - 1;
      const FIRST_INDEX = 0;

      const prevIndex =
        currentIndex === FIRST_INDEX ? LAST_INDEX : currentIndex - 1;
      const nextIndex =
        currentIndex === LAST_INDEX ? FIRST_INDEX : currentIndex + 1;

      if (direction === "right") {
        const prev = filteredPageRoutes[prevIndex];
        navigate(prev?.path);
      }

      if (direction === "left") {
        const next = filteredPageRoutes[nextIndex];
        navigate(next?.path);
      }
    };

    return (
      <SlideMobileTouch
        onSwipe={handleSwipeAction}
        thresholdPercentage={thresholdPercentage}
      >
        <Component {...props} />
      </SlideMobileTouch>
    );
  };