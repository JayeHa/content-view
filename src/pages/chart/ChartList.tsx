import { ChartContent } from "@/models/contents/chart";
import { useFetchContentList } from "@/service/useContentService";
import { InfiniteScrollWrapper } from "@components/InfiniteScrollWrapper";
import { ListLayout } from "@layouts/ListLayout";
import { useMemo } from "react";
import { ChartCard } from "./ChartCard";

export const ChartList = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } =
    useFetchContentList<ChartContent>({
      contentType: "chart",
    });

  const contents = useMemo(
    () => (data ? data.pages.flatMap(({ contents }) => contents) : []),
    [data]
  );

  return (
    <InfiniteScrollWrapper
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetching={isFetching}
    >
      <ListLayout title="차트 목록" unit="음원지수" isLoading={isFetching}>
        {contents.map((content) => (
          <ChartCard key={content.id} chartContent={content} />
        ))}
      </ListLayout>
    </InfiniteScrollWrapper>
  );
};
