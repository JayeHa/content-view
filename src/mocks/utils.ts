import { Content, DefaultContent } from "@/models/contents";
import { DefaultBodyType, StrictRequest } from "msw";

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const applyDelay = async (page: number) => {
  const FIRST_DELAY = 2000;
  const DELAY = 1000;
  await delay(page === 0 ? FIRST_DELAY : DELAY);
};

export const getRandomNumber = (index = 0) =>
  Math.round(Math.random() * 100) + index;

export const getRandomIndexAdjustment = (currentIndex: number) => {
  const adjustment = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
  return Math.max(currentIndex + adjustment, 1);
};

/** */
export const generateContents = (data: DefaultContent): Content[] => {
  return Array.from({ length: 999 }, (_, id) => ({
    ...data,
    id,
  }));
};

/** */
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
