import {
  Content,
  ContentType,
  PaginationParams,
  PaginationResponse,
} from "@/models/contents";
import { ChartContent } from "@/models/contents/chart";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ContentService } from "./contentService";

const contentKeys = {
  all: ["contents"] as const,
  list: (contentType: ContentType, params: PaginationParams) =>
    [...contentKeys.all, "list", contentType, params] as const,
};

export function useFetchContentList<T = ChartContent | Content>({
  contentType,
  size = 10,
}: {
  contentType: ContentType;
  size?: number;
}) {
  return useInfiniteQuery({
    queryKey: contentKeys.list(contentType, { size }),
    queryFn: ({ pageParam }) =>
      ContentService[`${contentType}List`]({
        page: pageParam,
        size,
      }) as unknown as PaginationResponse<T>,
    initialPageParam: 0,
    getNextPageParam: ({ isLastPage, pageNumber }) =>
      isLastPage ? undefined : pageNumber + 1,
  });
}
