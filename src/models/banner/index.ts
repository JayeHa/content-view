export type Duration = {
  start: string;
  end: string;
};

export type BannerType = {
  category: string;
  title: string;
  image: string;
  bgColor?: string;
  link?: {
    url: string;
    name?: string;
  };
  duration: Duration;
};

export const BANNER_ENDPOINTS = {
  chart: "/banner/chart",
} as const;
