import { Content, DefaultContent } from "@/models/contents";
import { DefaultBodyType, StrictRequest } from "msw";

/**
 * 지정된 인덱스에 랜덤한 숫자를 더해 반환합니다.
 * 기본 인덱스는 0이며, 결과값은 항상 1 이상입니다.

 */
export const getRandomNumber = (index = 0) =>
  Math.round(Math.random() * 100) + index;

/**
 * 현재 인덱스에 대해 -1, 0, 1 중 하나를 랜덤하게 조정한 후 반환합니다.
 * 결과값은 항상 1 이상이어야 합니다.
 */
export const getRandomIndexAdjustment = (currentIndex: number) => {
  const adjustment = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
  return Math.max(currentIndex + adjustment, 1);
};

/**
 * 제공된 기본 콘텐츠 데이터를 기반으로 999개의 콘텐츠 객체 배열을 생성합니다.
 * 각 콘텐츠 객체는 고유 ID를 가집니다.
 */
export const generateContents = (data: DefaultContent): Content[] => {
  return Array.from({ length: 999 }, (_, id) => ({
    ...data,
    id,
  }));
};

/**
 * 요청된 페이지 정보를 바탕으로 페이징 처리에 필요한 정보를 계산하여 반환합니다.
 * 페이징 정보에는 현재 페이지 번호, 페이지 크기, 총 콘텐츠 수, 총 페이지 수가 포함됩니다.
 */
export const getPaginationInfo = ({
  contents,
  request,
}: {
  contents: Content[];
  request: StrictRequest<DefaultBodyType>;
}) => {
  const url = new URL(request.url);
  const size = Number(url.searchParams.get("size"));
  const page = Number(url.searchParams.get("page"));
  const totalCount = contents.length;
  const totalPages = Math.round(totalCount / size);

  return { page, size, totalCount, totalPages };
};
