export const ContentCardSkeleton = () => {
  return (
    <div className="animate-pulse py-2">
      <article className="flex gap-3">
        <div className="size-16 overflow-hidden skeleton-item shrink-0" />

        <div className="flex w-full gap-7 pt-1">
          <div className="w-full flex flex-col gap-3">
            <div className="h-4 skeleton-item" />
            <div className="h-4 skeleton-item w-4/5" />
          </div>

          <div className="w-20 h-8 skeleton-item shrink-0" />
        </div>
      </article>
    </div>
  );
};
