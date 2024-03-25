import { DefaultContentData } from ".";

export type Rank = {
  current: number;
  prev?: number | null;
};

export type DefaultChartContent = DefaultContentData & {
  rank: Rank;
};

export type ChartContent = DefaultChartContent & { id: number };

const DEFAULT_DATA: DefaultChartContent = {
  src: "/images/900523958_s150.jpg",
  title: "나는 아픈 건 딱 질색이니까",
  subtitle: "(여자)아이들",
  amount: 10000,

  rank: {
    current: 1,
    prev: 2,
  },
} as const;

export const CHART = { DEFAULT_DATA };
