import { Content, PaginationResponse } from "@/models/contents";
import { WHOOK } from "@/models/contents/whook";
import { HttpResponse, http } from "msw";
import {
  applyDelay,
  generateContents,
  getPaginationInfo,
  getRandomNumber,
} from "./utils";

export const contentHandlers = [
  http.get("/whook", async ({ request }) => {
    const contents = generateContents(WHOOK.DEFAULT_DATA).map((v, i) => ({
      ...v,
      amount: getRandomNumber(i),
    }));

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
