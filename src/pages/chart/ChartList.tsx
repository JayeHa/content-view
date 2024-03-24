import { MusicCard } from "@components/Card";
import { ListLayout } from "@layouts/ListLayout";

export const ChartList = () => {
  return (
    <ListLayout title="차트 목록" unit="음원지수">
      {[
        <MusicCard key={1} rank={{ current: 1, prev: 1 }} />,
        <MusicCard key={3} rank={{ current: 2, prev: null }} />,
        <MusicCard key={4} rank={{ current: 3, prev: 2 }} />,
        <MusicCard key={5} rank={{ current: 4, prev: 5 }} />,
        <MusicCard key={6} rank={{ current: 999, prev: 5 }} />,
      ]}
    </ListLayout>
  );
};
