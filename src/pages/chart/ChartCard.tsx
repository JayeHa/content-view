import { CHART, Rank } from "@/models/contents/chart";
import { ContentCard } from "@components/ContentCard";
import { calcRankIcon } from "./utils";

type Props = {
  rank: Rank;
};

// TODO: 임시 props
export const ChartCard = ({ rank: _rank }: Props) => {
  const { rank, ...content } = CHART.DEFAULT_DATA;

  return (
    <ContentCard content={content}>
      {/* 순위 */}
      <div className="text-center w-12">
        <div className="text-2xl">
          <span className="sr-only">{rank.current}위</span>
          <span area-hidden="">{rank.current}</span>
        </div>
        <div>{calcRankIcon(_rank)}</div>
      </div>
    </ContentCard>
  );
};
