import {
  CONTENT_ENDPOINTS,
  Content,
  DefaultContentData,
  PaginationResponse,
} from "@/models/contents";
import { CHARGE } from "@/models/contents/charge";
import { CHART } from "@/models/contents/chart";
import { EVENT } from "@/models/contents/event";
import { NEWS } from "@/models/contents/news";
import { STORE } from "@/models/contents/store";
import { WHOOK } from "@/models/contents/whook";
import { DefaultBodyType, HttpResponse, StrictRequest, http } from "msw";
import {
  applyDelay,
  generateContents,
  getPaginationInfo,
  getRandomIndexAdjustment,
  getRandomNumber,
} from "./utils";

type Props<T = DefaultContentData, U = Content> = {
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
      defaultData: CHART.DEFAULT_DATA,
      transformContent: (prev, index) => {
        // amount: 음원지수
        const AMOUNT_OFFSET = 5.24;
        const newAmount = Number(prev.amount) - index * AMOUNT_OFFSET;
        const formattedAmount = newAmount.toFixed(2);

        // rank: 순위
        const NEW_RANK_LIKELY = 0.2;
        const isNewRank = Math.random() > NEW_RANK_LIKELY;

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
      defaultData: WHOOK.DEFAULT_DATA,
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
      defaultData: EVENT.DEFAULT_DATA,
    })
  ),
  // 뉴스
  http.get(CONTENT_ENDPOINTS.news, async ({ request }) =>
    handleContentEndpoint({
      request,
      defaultData: NEWS.DEFAULT_DATA,
    })
  ),
  // 스토어
  http.get(CONTENT_ENDPOINTS.store, async ({ request }) =>
    handleContentEndpoint({
      request,
      defaultData: STORE.DEFAULT_DATA,
    })
  ),
  // 충전소
  http.get(CONTENT_ENDPOINTS.charge, async ({ request }) =>
    handleContentEndpoint({
      request,
      defaultData: CHARGE.DEFAULT_DATA,
    })
  ),
];