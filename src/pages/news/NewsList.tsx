import { NEWS } from "@/models/contents/news";
import { ContentCard } from "@components/ContentCard";
import { ListLayout } from "@layouts/ListLayout";

export const NewsList = () => {
  return (
    <ListLayout title="뉴스 목록" unit="">
      {Array.from({ length: 3 }, (_, i) => (
        <ContentCard key={i} content={NEWS.DEFAULT_DATA} />
      ))}
    </ListLayout>
  );
};
