import { useFetchWhookList } from "@/service/useContentService";
import { ContentCard } from "@components/ContentCard";
import { ListLayout } from "@layouts/ListLayout";
import { useCallback, useMemo } from "react";

export const WhookList = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchWhookList({
    size: 10,
  });

  const contents = useMemo(
    () => (data ? data.pages.flatMap(({ contents }) => contents) : []),
    [data]
  );

  const loadMoreItems = useCallback(() => {
    console.log(hasNextPage, isFetching);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  return (
    <>
      <ListLayout title="채팅방 목록" unit="인원" isLoading={isFetching}>
        {contents.map((content, index) => (
          <ContentCard key={index} content={content} />
        ))}
      </ListLayout>

      <button type="button" onClick={loadMoreItems}>
        데이터 가지고 오기 😎
      </button>
    </>
  );
};
