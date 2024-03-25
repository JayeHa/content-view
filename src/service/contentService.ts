import { CONTENT_ENDPOINTS, Content } from "@/models/contents";
import { ChartContent } from "@/models/contents/chart";
import { PaginationResponse } from "@/models/contents/pagination";
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
  // 이벤트
  eventList: async (params: Prams) => {
    const { data: response } = await axiosInstance.get<
      PaginationResponse<Content>
    >(CONTENT_ENDPOINTS.event, { params });

    return response;
  },
  // 뉴스
  newsList: async (params: Prams) => {
    const { data: response } = await axiosInstance.get<
      PaginationResponse<Content>
    >(CONTENT_ENDPOINTS.news, { params });

    return response;
  },
  // 스토어
  storeList: async (params: Prams) => {
    const { data: response } = await axiosInstance.get<
      PaginationResponse<Content>
    >(CONTENT_ENDPOINTS.store, { params });

    return response;
  },
  // 충전소
  chargeList: async (params: Prams) => {
    const { data: response } = await axiosInstance.get<
      PaginationResponse<Content>
    >(CONTENT_ENDPOINTS.charge, { params });

    return response;
  },
};
