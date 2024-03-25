import { Content, PaginationResponse } from "@/models/contents";
import { ChartContent } from "@/models/contents/chart";
import axios from "axios";

const axiosInstance = axios.create();

type Prams = { page: number; size: number };

export const ContentService = {
  chartList: async (params: Prams) => {
    const { data: response } = await axiosInstance.get<
      PaginationResponse<ChartContent>
    >("/chart", { params });

    return response;
  },
  whookList: async (params: Prams) => {
    const { data: response } = await axiosInstance.get<
      PaginationResponse<Content>
    >("/whook", { params });

    return response;
  },
};
