import { GLOBAL_MAX_WIDTH } from "@styles/constants/spacing";
import {
  PropsWithChildren,
  TouchEventHandler,
  useCallback,
  useState,
} from "react";

export type SlideMobileTouchProps = PropsWithChildren & {
  /** 발동 기준이 되는 최소 드래그 길이(퍼센트 단위) */
  thresholdPercentage: number;

  onSwipe: (direction: "left" | "right") => void;
};

export const SlideMobileTouch = ({
  onSwipe,
  thresholdPercentage,
  children,
}: SlideMobileTouchProps) => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [currentX, setCurrentX] = useState<number>(0);

  // 슬라이드 터치 종료에 대한 이벤트 처리
  const handleSlideEnd = useCallback(
    (endX: number) => {
      if (startX) {
        const distance = Math.abs(endX - startX);
        const screenX = window.screen.width;

        const adjustedScreenWidth =
          screenX > GLOBAL_MAX_WIDTH ? GLOBAL_MAX_WIDTH : screenX;
        const ratio = (distance / adjustedScreenWidth) * 100;

        console.log(
          `${isSwiping && ratio > thresholdPercentage ? `📱Swipe ${endX > startX ? "right" : "left"}!` : "❌ Not Swipe"} (${Math.round(ratio * 10) / 10} > ${thresholdPercentage})`
        );

        if (isSwiping && ratio > thresholdPercentage) {
          const direction = endX > startX ? "right" : "left";

          onSwipe(direction);
        }
      }

      setIsSwiping(false);
      setStartX(null);
      setCurrentX(0);
    },
    [startX, isSwiping, onSwipe, thresholdPercentage]
  );

  // 핸들러
  const handleTouchStart: TouchEventHandler = useCallback((event) => {
    setStartX(event.touches[0].clientX);
    setIsSwiping(true);
  }, []);

  const handleTouchMove: TouchEventHandler = useCallback((event) => {
    setCurrentX(event.touches?.[0]?.clientX);
  }, []);

  const handleTouchEnd: TouchEventHandler = useCallback(() => {
    handleSlideEnd(currentX);
  }, [handleSlideEnd, currentX]);

  return (
    <div
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
    >
      {children}
    </div>
  );
};
