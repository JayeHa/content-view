import {
  Content,
  DefaultContentData,
  PaginationResponse,
} from "@/models/contents";
import { WHOOK } from "@/models/contents/whook";
import { DefaultBodyType, HttpResponse, StrictRequest, http } from "msw";

const generateContents = (data: DefaultContentData): Content[] => {
  return Array.from({ length: 999 }, (_, id) => ({
    ...data,
    id,
  }));
};

const getPaginationInfo = ({
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

export const handlers = [
  http.get("/whook", async ({ request }) => {
    const getRandomNumber = (index = 0) =>
      Math.round(Math.random() * 100) + index;

    const contents = generateContents(WHOOK.DEFAULT_DATA).map((v, i) => ({
      ...v,
      amount: getRandomNumber(i),
    }));

    const { page, size, totalCount, totalPages } = getPaginationInfo({
      request,
      contents,
    });

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
