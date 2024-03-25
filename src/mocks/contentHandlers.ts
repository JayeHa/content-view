import { Content, PaginationResponse } from "@/models/contents";
import { CHART } from "@/models/contents/chart";
import { WHOOK } from "@/models/contents/whook";
import { HttpResponse, http } from "msw";
import {
  applyDelay,
  generateContents,
  getPaginationInfo,
  getRandomIndexAdjustment,
  getRandomNumber,
} from "./utils";

export const contentHandlers = [
  http.get("/chart", async ({ request }) => {
    const offset = 5.24;
    const isNewRankLikely = 0.2;

    const contents = generateContents(CHART.DEFAULT_DATA).map(
      (prev, index) => ({
        ...prev,
        amount: parseFloat((Number(prev.amount) - index * offset).toFixed(2)),
        rank: {
          current: index + 1,
          prev:
            Math.random() > isNewRankLikely
              ? getRandomIndexAdjustment(index + 1)
              : undefined,
        },
      })
    );

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
  }),

  http.get("/whook", async ({ request }) => {
    const contents = generateContents(WHOOK.DEFAULT_DATA).map(
      (prev, index) => ({
        ...prev,
        amount: getRandomNumber(index),
      })
    );

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
  }),
];
