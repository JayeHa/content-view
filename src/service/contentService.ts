import {
  CONTENT_ENDPOINTS,
  Content,
  PaginationResponse,
} from "@/models/contents";
import { ChartContent } from "@/models/contents/chart";
import axios from "axios";

const axiosInstance = axios.create();

type Prams = { page: number; size: number };

export const ContentService = {
  // 차트
  chartList: async (params: Prams) => {
    const { data: response } = await axiosInstance.get<
      PaginationResponse<ChartContent>
    >(CONTENT_ENDPOINTS.chart, { params });

    return response;
  },
  // Whook
  whookList: async (params: Prams) => {
    const { data: response } = await axiosInstance.get<
      PaginationResponse<Content>
    >(CONTENT_ENDPOINTS.whook, { params });

    return response;
  },
};
