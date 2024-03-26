import { Duration } from "@/models/banner";
import { getDateDistance, kstFormat } from "@/utils/date";
import { StatusBadgeProps } from "./StatusBadge";

export function getStatusOfDurationWithDday(
  duration: Duration
): StatusBadgeProps {
  const now = new Date();
  const startDate = kstFormat(new Date(duration.start));
  const endDate = kstFormat(new Date(duration.end));

  // 현재 시각이 시작 날짜보다 전인 경우, D-day 계산
  if (now < new Date(startDate)) {
    const { days } = getDateDistance(now, new Date(startDate));
    return {
      status: "beforeStart",
      text: `D-${days}`,
    };
  }

  // 현재 시각이 종료 날짜보다 후인 경우
  if (now > new Date(endDate)) {
    return {
      status: "completed",
      text: "종료됨",
    };
  }

  // 위의 조건에 해당하지 않는 경우
  return {
    status: "inProgress",
    text: "진행중",
  };
}
