import { useFetchContentList } from "@/service/useContentService";
import { ContentCard } from "@components/ContentCard";
import { InfiniteScrollWrapper } from "@components/InfiniteScrollWrapper";
import { ListLayout } from "@layouts/ListLayout";
import { useMemo } from "react";

export const StoreList = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchContentList({
    contentType: "whook",
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
      <ListLayout title="상품 목록" unit="금액" isLoading={isFetching}>
        {contents.map((content, index) => (
          <ContentCard key={index} content={content} />
        ))}
      </ListLayout>
    </InfiniteScrollWrapper>
  );
};
