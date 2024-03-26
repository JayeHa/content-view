import { BANNER_ENDPOINTS, BannerType } from "@/models/banner";
import { HttpResponse, http } from "msw";
import { BANNER_LIST } from "./constants";

export const bannerHandlers = [
  http.get(BANNER_ENDPOINTS.chart, async () => {
    return HttpResponse.json<BannerType[]>(BANNER_LIST, { status: 200 });
  }),
];
