import { GLOBAL_MAX_WIDTH } from "@styles/constants/spacing";
import {
  PropsWithChildren,
  TouchEventHandler,
  useCallback,
  useState,
} from "react";

export type SlideMobileTouchProps = PropsWithChildren & {
  thresholdPercentage: number;
  onSwipe: (direction: "left" | "right") => void;
};

export const SlideMobileTouch = ({
  onSwipe,
  thresholdPercentage,
  children,
}: SlideMobileTouchProps) => {
  const [startX, setStartX] = useState<number | null>(null);
  const [currentX, setCurrentX] = useState<number>(0);

  const [isSwiping, setIsSwiping] = useState(false);
  const [isSwipeValid, setIsSwipeValid] = useState(false);

  // 스와이프 거리를 화면 너비에 대한 백분율로 변환하는 함수
  const getSwipeRatio = useCallback((distance: number) => {
    const screenWidth =
      window.screen.width > GLOBAL_MAX_WIDTH
        ? GLOBAL_MAX_WIDTH
        : window.screen.width;
    return (distance / screenWidth) * 100;
  }, []);

  // 스와이프가 유효한지 판별하는 함수
  const calculateIsSwipeValid = useCallback(
    (distance: number) => {
      const swipeRatio = getSwipeRatio(distance);
      return swipeRatio > thresholdPercentage;
    },
    [getSwipeRatio, thresholdPercentage]
  );

  // 슬라이드 터치 종료에 대한 이벤트 처리
  const handleSwipeEnd = useCallback(
    (endX: number) => {
      if (startX) {
        const distance = Math.abs(currentX - startX);
        const isValidSwipe = calculateIsSwipeValid(distance);

        if (isValidSwipe) {
          const direction = currentX > startX ? "right" : "left";
          onSwipe(direction);
        }

        console.log(
          `${isValidSwipe ? `📱Swipe ${endX > startX ? "right" : "left"}!` : "❌ Not Swipe"}`
        );
      }

      setIsSwiping(false);
      setIsSwipeValid(false);
      setStartX(null);
      setCurrentX(0);
    },
    [calculateIsSwipeValid, currentX, onSwipe, startX]
  );

  // 현재 스와이프 상태와 거리를 기반으로 translateX 스타일 값 계산
  const getTransformStyle = () => {
    const INITIAL_TRANSLATE_X = 0;
    const MIN_SWIPE_RATIO = 10;

    if (!isSwiping || startX === null) {
      return `translateX(${INITIAL_TRANSLATE_X}px)`;
    }

    const distance = currentX - startX;
    const swipeRatio = getSwipeRatio(distance);

    const translateX =
      Math.abs(swipeRatio) > MIN_SWIPE_RATIO ? distance : INITIAL_TRANSLATE_X;

    return `translateX(${translateX}px)`;
  };

  // 핸들러
  const handleTouchStart: TouchEventHandler = useCallback((event) => {
    const touchX = event.touches[0].clientX;
    setStartX(touchX);
    setCurrentX(touchX);
    setIsSwiping(true);
  }, []);

  const handleTouchMove: TouchEventHandler = useCallback(
    (event) => {
      if (!isSwiping || startX === null) return;
      const touchX = event.touches[0].clientX;
      setCurrentX(touchX);

      const distance = Math.abs(touchX - startX);
      const isValidSwipe = calculateIsSwipeValid(distance);
      setIsSwipeValid(isValidSwipe);
    },
    [calculateIsSwipeValid, isSwiping, startX]
  );

  const handleTouchEnd: TouchEventHandler = useCallback(() => {
    handleSwipeEnd(currentX);
  }, [handleSwipeEnd, currentX]);

  return (
    <div
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
      style={{
        transform: getTransformStyle(),
        transition: isSwiping
          ? "opacity 0.3s ease-out"
          : "transform 1s ease-out",
        opacity: isSwipeValid ? 0.3 : 1,
      }}
    >
      {children}
    </div>
  );
};
