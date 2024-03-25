export const CONTENT_ENDPOINTS = {
  chart: "/chart",
  whook: "/whook",
  event: "/event",
  news: "/news",
  store: "/store",
  charge: "/charge",
};

export type DefaultContentData = {
  title: string;
  subtitle?: string;
  src: string;
  amount?: number | string;
};

export type Content = DefaultContentData;

// TODO: 주석 풀기
// export type Content = DefaultContentData & { id: number };

export type PaginationParams = {
  size: number;
};

export interface PaginationResponse<T> {
  contents: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}
