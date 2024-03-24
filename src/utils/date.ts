/**
 * 날짜 관련 유틸리티 함수
 *
 * 이 코드는 Toss의 Slash 프로젝트에서 가지고 온 유틸리티 함수들을 포함합니다.
 * 원본 코드는 다음 링크에서 확인할 수 있습니다:
 * @see https://github.com/toss/slash/blob/main/packages/common/date/src/date.ts
 */

import { format as _format } from "date-fns";
import { ko } from "date-fns/locale";

const ISO_DATE_TIME_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";

export type DateFnsDateType = number | Date;

/**
 * 날짜를 특정 형식의 문자열로 포맷합니다. locale을 한국어로 설정합니다.
 */
export const kstFormat = (
  date: DateFnsDateType,
  format: string = ISO_DATE_TIME_FORMAT
) => _format(date, format, { locale: ko });

/**
 * 두 날짜 간의 시간 차이를 계산합니다.
 */
export function getDateDistance(startDate: Date, endDate: Date) {
  const SECOND_TO_MS = 1000;
  const MINUTE_TO_MS = 1000 * 60;
  const HOUR_TO_MS = 1000 * 60 * 60;
  const DAY_TO_MS = 1000 * 60 * 60 * 24;

  const endTime = endDate.getTime();
  const startTime = startDate.getTime();
  const distance = endTime - startTime;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / DAY_TO_MS),
    hours: Math.floor((distance % DAY_TO_MS) / HOUR_TO_MS),
    minutes: Math.floor((distance % HOUR_TO_MS) / MINUTE_TO_MS),
    seconds: Math.floor((distance % MINUTE_TO_MS) / SECOND_TO_MS),
  };
}
