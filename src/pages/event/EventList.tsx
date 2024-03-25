import { useFetchContentList } from "@/service/useContentService";
import { ContentCard } from "@components/ContentCard";
import { InfiniteScrollWrapper } from "@components/InfiniteScrollWrapper";
import { ListLayout } from "@layouts/ListLayout";
import { useMemo } from "react";

export const EventList = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchContentList({
    contentType: "event",
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
      <ListLayout title="이벤트 목록" unit="" isLoading={isFetching}>
        {contents.map((content, index) => (
          <ContentCard key={index} content={content} />
        ))}
      </ListLayout>
    </InfiniteScrollWrapper>
  );
};
