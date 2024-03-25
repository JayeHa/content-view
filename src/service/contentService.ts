import { Content, PaginationResponse } from "@/models/contents";
import axios from "axios";

const axiosInstance = axios.create();

export const ContentService = {
  whookList: async (params: { page: number; size: number }) => {
    const { data: response } = await axiosInstance.get<
      PaginationResponse<Content>
    >("/whook", { params });

    return response;
  },
};
