import { useFetchWhookList } from "@/service/useContentService";
import { ContentCard } from "@components/ContentCard";
import { InfiniteScrollWrapper } from "@components/InfiniteScrollWrapper";
import { ListLayout } from "@layouts/ListLayout";
import { useMemo } from "react";

export const WhookList = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchWhookList({
    size: 10,
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
      <ListLayout title="채팅방 목록" unit="인원" isLoading={isFetching}>
        {contents.map((content, index) => (
          <ContentCard key={index} content={content} />
        ))}
      </ListLayout>
    </InfiniteScrollWrapper>
  );
};
