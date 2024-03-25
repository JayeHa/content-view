import { useIntersect } from "@/hooks/useIntersect";
import { InfiniteQueryObserverBaseResult } from "@tanstack/react-query";
import { ReactNode, useCallback } from "react";

type InfiniteScrollState = Required<
  Pick<
    InfiniteQueryObserverBaseResult,
    "hasNextPage" | "fetchNextPage" | "isFetching"
  >
>;

type Props = InfiniteScrollState & {
  rootMargin?: IntersectionObserverInit["rootMargin"];
  children: ReactNode;
};

export const InfiniteScrollWrapper = ({
  hasNextPage,
  fetchNextPage,
  isFetching,

  rootMargin = "120%",

  children,
}: Props) => {
  const loadMoreItems = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  const ref = useIntersect(
    async (entry, observer) => {
      if (!entry.isIntersecting) return;

      observer.unobserve(entry.target);
      loadMoreItems();
    },
    { rootMargin }
  );

  return (
    <>
      {children}
      <div ref={ref} />
    </>
  );
};
