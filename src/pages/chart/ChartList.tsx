import { ListLayout } from "@layouts/ListLayout";
import { ChartCard } from "./ChartCard";

export const ChartList = () => {
  return (
    <ListLayout title="차트 목록" unit="음원지수">
      {[
        <ChartCard key={1} rank={{ current: 1, prev: 1 }} />,
        <ChartCard key={3} rank={{ current: 2, prev: null }} />,
        <ChartCard key={4} rank={{ current: 3, prev: 2 }} />,
        <ChartCard key={5} rank={{ current: 4, prev: 5 }} />,
        <ChartCard key={6} rank={{ current: 999, prev: 5 }} />,
      ]}
    </ListLayout>
  );
};
