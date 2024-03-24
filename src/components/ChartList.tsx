import { filteredPageRoutes } from "@/router";
import { MusicCard } from "@components/MusicCard";
import { Section } from "@components/Section";
import { useLocation, useNavigate } from "react-router-dom";
import { SlideMobileTouch } from "./SlideMobileTouch";

export const ChartList = () => {
  const { pathname: currentPath } = useLocation();
  const navigate = useNavigate();

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
    <SlideMobileTouch onSwipe={handleSwipeAction} thresholdPercentage={50}>
      <Section>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4">
            {filteredPageRoutes[currentIndex].pageName} 목록
          </h2>
          <div className="text-right text-gray-400 text-sm pt-2">음원지수</div>
        </div>

        <ol className="flex flex-col gap-4">
          <li>
            <MusicCard rank={{ current: 1, prev: 1 }} />
          </li>
          <li>
            <MusicCard rank={{ current: 2, prev: null }} />
          </li>
          <li>
            <MusicCard rank={{ current: 3, prev: 2 }} />
          </li>
          <li>
            <MusicCard rank={{ current: 4, prev: 5 }} />
          </li>
          <li>
            <MusicCard rank={{ current: 999, prev: 5 }} />
          </li>
        </ol>

        {/* 스켈레톤 */}
        <div className="mt-2">
          <span className="sr-only">로딩중</span>
          <MusicCard.Skeleton />
          <MusicCard.Skeleton />
          <MusicCard.Skeleton />
        </div>
      </Section>
    </SlideMobileTouch>
  );
};
