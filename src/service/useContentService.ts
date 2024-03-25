import { PaginationParams } from "@/models/contents";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ContentService } from "./contentService";

const contentKeys = {
  all: ["contents"] as const,
  whook: (params: PaginationParams) =>
    [...contentKeys.all, "whook", params] as const,
};

export const useFetchWhookList = ({ size }: PaginationParams) =>
  useInfiniteQuery({
    queryKey: contentKeys.whook({ size }),
    queryFn: ({ pageParam }) =>
      ContentService.whookList({ page: pageParam, size }),
    initialPageParam: 0,
    getNextPageParam: ({ isLastPage, pageNumber }) =>
      isLastPage ? undefined : pageNumber + 1,
  });
