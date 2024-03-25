import { useFetchWhookList } from "@/service/useContentService";
import { ContentCard } from "@components/ContentCard";
import { ListLayout } from "@layouts/ListLayout";

export const WhookList = () => {
  const { data, isLoading } = useFetchWhookList();

  if (isLoading) {
    return null;
  }

  return (
    <ListLayout title="채팅방 목록" unit="인원">
      {data?.contents?.map((content, index) => (
        <ContentCard key={index} content={content} />
      ))}
    </ListLayout>
  );
};
