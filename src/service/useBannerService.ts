import { useQuery } from "@tanstack/react-query";
import { BannerService } from "./bannerService";

const bannerKeys = {
  all: ["banner"] as const,
  chart: () => [...bannerKeys.all, "chart"] as const,
};

export const useFetchBannerList = () => {
  return useQuery({
    queryKey: bannerKeys.chart(),
    queryFn: BannerService.chart,
  });
};
