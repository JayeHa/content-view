import { DefaultContent } from ".";

export type Rank = {
  current: number;
  prev?: number | null;
};

export type DefaultChartContent = DefaultContent & {
  rank: Rank;
};

export type ChartContent = DefaultChartContent & { id: number };
