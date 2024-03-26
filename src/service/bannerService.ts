import { BANNER_ENDPOINTS, BannerType } from "@/models/banner";
import axios from "axios";

const axiosInstance = axios.create();

export const BannerService = {
  chart: async () => {
    const { data: response } = await axiosInstance.get<BannerType[]>(
      BANNER_ENDPOINTS.chart
    );

    return response;
  },
};
