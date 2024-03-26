export type ContentType =
  | "chart"
  | "whook"
  | "event"
  | "news"
  | "store"
  | "charge";

export const CONTENT_ENDPOINTS: Record<ContentType, string> = {
  chart: "/chart",
  whook: "/whook",
  event: "/event",
  news: "/news",
  store: "/store",
  charge: "/charge",
};

export type DefaultContent = {
  title: string;
  subtitle?: string;
  src: string;
  amount?: number | string;
};

export type Content = DefaultContent & { id: number };
