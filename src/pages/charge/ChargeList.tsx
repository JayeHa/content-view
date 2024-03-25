import { useFetchContentList } from "@/service/useContentService";
import { ContentCard } from "@components/ContentCard";
import { InfiniteScrollWrapper } from "@components/InfiniteScrollWrapper";
import { ListLayout } from "@layouts/ListLayout";
import { useMemo } from "react";

export const ChargeList = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchContentList({
    contentType: "charge",
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
      <ListLayout title="한터캐시 충전" unit="금액" isLoading={isFetching}>
        {contents.map((content, index) => (
          <ContentCard key={index} content={content} />
        ))}
      </ListLayout>
    </InfiniteScrollWrapper>
  );
};
