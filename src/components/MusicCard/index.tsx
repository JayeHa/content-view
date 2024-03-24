import { Image } from "@components/Image";
import { MusicCardSkeleton } from "./skeletons";
import { calcRankIcon } from "./utils";

export type Rank = {
  current: number;
  prev?: number | null;
};

type Props = {
  rank: Rank;
};

export const MusicCard = ({ rank }: Props) => {
  return (
    <article className="flex">
      {/* 이미지 */}
      <div className="size-16 overflow-hidden rounded shrink-0">
        <Image src="/images/900523958_s150.jpg" />
      </div>

      <div className="flex w-full pt-2">
        {/* 순위 */}
        <div className="text-center w-12">
          <div className="text-2xl">
            <span className="sr-only">{rank.current}위</span>
            <span area-hidden>{rank.current}</span>
          </div>
          <div>{calcRankIcon(rank)}</div>
        </div>

        {/* 제목, 가수 */}
        <div className="flex-1 w-1 pl-1">
          <h3 className="truncate mb-1">나는 아픈 건 딱 질색이니까</h3>
          <p className="truncate text-neutral-400">(여자)아이들</p>
        </div>

        {/* 음원지수 */}
        <div className="shrink-0 font-bold w-20">10,000.00</div>
      </div>
    </article>
  );
};

MusicCard.Skeleton = MusicCardSkeleton;
