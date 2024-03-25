import { ChartContent } from "@/models/contents/chart";
import { ContentCard } from "@components/ContentCard";
import { calcRankIcon } from "./utils";

type Props = {
  chartContent: ChartContent;
};

export const ChartCard = ({ chartContent }: Props) => {
  const { rank, ...content } = chartContent;

  return (
    <ContentCard content={content}>
      {/* 순위 */}
      <div className="text-center w-12">
        <div className="text-2xl">
          <span className="sr-only">{rank.current}위</span>
          <span area-hidden="">{rank.current}</span>
        </div>
        <div>{calcRankIcon(rank)}</div>
      </div>
    </ContentCard>
  );
};
