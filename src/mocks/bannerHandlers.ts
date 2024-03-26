import {
  BANNER_ENDPOINTS,
  BannerType,
  CHART_BANNER_LIST,
} from "@/models/banner";
import { HttpResponse, http } from "msw";

export const bannerHandlers = [
  http.get(BANNER_ENDPOINTS.chart, async () => {
    return HttpResponse.json<BannerType[]>(CHART_BANNER_LIST, { status: 200 });
  }),
];
