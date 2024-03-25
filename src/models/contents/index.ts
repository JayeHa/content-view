export type DefaultContentData = {
  title: string;
  subtitle?: string;
  src: string;
  amount?: number | string;
};

export type Content = DefaultContentData;

// TODO: 주석 풀기
// export type Content = DefaultContentData & { id: number };

export type ContentResponse<T = Content> = {
  contents: T[];
};
