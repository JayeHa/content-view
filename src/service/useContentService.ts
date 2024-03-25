import { ContentResponse } from "@/models/contents";
import { useQuery } from "@tanstack/react-query";
import { ContentService } from "./contentService";

const contentKeys = {
  all: ["contents"] as const,
  whook: () => [...contentKeys.all, "whook"] as const,
};

export const useFetchWhookList = () =>
  useQuery<ContentResponse>({
    queryKey: contentKeys.whook(),
    queryFn: () => ContentService.whookList(),
  });
