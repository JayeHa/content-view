import { STORE } from "@/models/contents/store";
import { ContentCard } from "@components/ContentCard";
import { ListLayout } from "@layouts/ListLayout";

export const StoreList = () => {
  return (
    <ListLayout title="상품 목록" unit="금액">
      {Array.from({ length: 10 }, (_, i) => (
        <ContentCard key={i} content={STORE.DEFAULT_DATA} />
      ))}
    </ListLayout>
  );
};
