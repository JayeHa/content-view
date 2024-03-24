import { withSlideMobileTouch } from "@/hocs/withSlideMobileTouch";
import { MusicCard } from "@components/MusicCard";
import { Section } from "@components/Section";

export const ChartList = withSlideMobileTouch(() => {
  return (
    <Section>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">차트 목록</h2>
        <div className="text-right text-gray-400 text-sm pt-2">음원지수</div>
      </div>

      <ol className="flex flex-col gap-4">
        <li>
          <MusicCard rank={{ current: 1, prev: 1 }} />
        </li>
        <li>
          <MusicCard rank={{ current: 2, prev: null }} />
        </li>
        <li>
          <MusicCard rank={{ current: 3, prev: 2 }} />
        </li>
        <li>
          <MusicCard rank={{ current: 4, prev: 5 }} />
        </li>
        <li>
          <MusicCard rank={{ current: 999, prev: 5 }} />
        </li>
      </ol>

      {/* 스켈레톤 */}
      <div className="mt-2">
        <span className="sr-only">로딩중</span>
        <MusicCard.Skeleton />
        <MusicCard.Skeleton />
        <MusicCard.Skeleton />
      </div>
    </Section>
  );
}, 50);
