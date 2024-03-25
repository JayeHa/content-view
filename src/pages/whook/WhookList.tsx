import { WHOOK } from "@/models/contents/whook";
import { ContentCard } from "@components/ContentCard";
import { ListLayout } from "@layouts/ListLayout";

export const WhookList = () => {
  return (
    <ListLayout title="채팅방 목록" unit="인원">
      {Array.from({ length: 10 }, (_, i) => (
        <ContentCard key={i} content={WHOOK.DEFAULT_DATA} />
      ))}
    </ListLayout>
  );
};
