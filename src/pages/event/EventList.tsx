import { EVENT } from "@/models/contents/event";
import { ContentCard } from "@components/ContentCard";
import { ListLayout } from "@layouts/ListLayout";

export const EventList = () => {
  return (
    <ListLayout title="이벤트 목록" unit="">
      {Array.from({ length: 10 }, (_, i) => (
        <ContentCard key={i} content={EVENT.DEFAULT_DATA} />
      ))}
    </ListLayout>
  );
};
