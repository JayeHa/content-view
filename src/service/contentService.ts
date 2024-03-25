import { ContentResponse } from "@/models/contents";
import axios from "axios";

const axiosInstance = axios.create();

export const ContentService = {
  whookList: async () => {
    const { data: response } =
      await axiosInstance.get<ContentResponse>("/whook");

    return response;
  },
};
