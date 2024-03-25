import { CHARGE } from "@/models/contents/charge";
import { ContentCard } from "@components/ContentCard";
import { ListLayout } from "@layouts/ListLayout";

export const ChargeList = () => {
  return (
    <ListLayout title="한터캐시 충전" unit="금액">
      {Array.from({ length: 10 }, (_, i) => (
        <ContentCard key={i} content={CHARGE.DEFAULT_DATA} />
      ))}
    </ListLayout>
  );
};
