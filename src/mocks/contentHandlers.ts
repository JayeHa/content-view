import {
  CONTENT_ENDPOINTS,
  Content,
  DEFAULT_DATA,
  DefaultContent,
} from "@/models/contents";
import { PaginationResponse } from "@/models/contents/pagination";
import { DefaultBodyType, HttpResponse, StrictRequest, http } from "msw";
import {
  applyDelay,
  generateContents,
  getPaginationInfo,
  getRandomIndexAdjustment,
  getRandomNumber,
} from "./utils";

type Props<T = DefaultContent, U = Content> = {
  request: StrictRequest<DefaultBodyType>;
  defaultData: T;
  transformContent?: (content: U, index: number) => U;
};

async function handleContentEndpoint({
  request,
  defaultData,
  transformContent = (content) => content,
}: Props) {
  const contents = generateContents(defaultData).map(transformContent);
  const { page, size, totalCount, totalPages } = getPaginationInfo({
    request,
    contents,
  });

  await applyDelay(page);

  return HttpResponse.json<PaginationResponse<Content>>(
    {
      contents: contents.slice(page * size, (page + 1) * size),
      pageNumber: page,
      pageSize: size,
      totalCount,
      totalPages,
      isLastPage: totalPages <= page,
      isFirstPage: page === 0,
    },
    { status: 200 }
  );
}

export const contentHandlers = [
  // 차트
  http.get(CONTENT_ENDPOINTS.chart, async ({ request }) =>
    handleContentEndpoint({
      request,
      defaultData: DEFAULT_DATA.chart,
      transformContent: (prev, index) => {
        // amount: 음원지수
        const AMOUNT_OFFSET = 5.24;
        const newAmount = Number(prev.amount) - index * AMOUNT_OFFSET;
        const formattedAmount = newAmount.toFixed(2);

        // rank: 순위
        const NEW_RANK_LIKELY = 0.2;
        const isNewRank = Math.random() < NEW_RANK_LIKELY;

        const currentRank = index + 1;
        const prevRank = !isNewRank
          ? getRandomIndexAdjustment(currentRank)
          : undefined;

        return {
          ...prev,
          amount: formattedAmount,
          rank: { current: currentRank, prev: prevRank },
        };
      },
    })
  ),
  // Whook
  http.get(CONTENT_ENDPOINTS.whook, async ({ request }) =>
    handleContentEndpoint({
      request,
      defaultData: DEFAULT_DATA.whook,
      transformContent: (prev, index) => ({
        ...prev,
        amount: getRandomNumber(index),
      }),
    })
  ),
  // 이벤트
  http.get(CONTENT_ENDPOINTS.event, async ({ request }) =>
    handleContentEndpoint({
      request,
      defaultData: DEFAULT_DATA.event,
    })
  ),
  // 뉴스
  http.get(CONTENT_ENDPOINTS.news, async ({ request }) =>
    handleContentEndpoint({
      request,
      defaultData: DEFAULT_DATA.news,
    })
  ),
  // 스토어
  http.get(CONTENT_ENDPOINTS.store, async ({ request }) =>
    handleContentEndpoint({
      request,
      defaultData: DEFAULT_DATA.store,
    })
  ),
  // 충전소
  http.get(CONTENT_ENDPOINTS.charge, async ({ request }) =>
    handleContentEndpoint({
      request,
      defaultData: DEFAULT_DATA.charge,
    })
  ),
];
