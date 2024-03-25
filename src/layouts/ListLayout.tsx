import { withSlideMobileTouch } from "@/hocs/withSlideMobileTouch";
import { ContentCard } from "@components/ContentCard";
import { Section } from "@components/Section";
import { ReactNode } from "react";

type Props = {
  title: string;
  unit: string | undefined;
  children: ReactNode[];
};

export const ListLayout = withSlideMobileTouch(
  ({ title, unit, children }: Props) => {
    return (
      <Section>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4">{title}</h2>
          <div className="text-right text-gray-400 text-sm pt-2">{unit}</div>
        </div>

        <ol className="flex flex-col gap-4">
          {children.map((component, index) => (
            <li key={index}>{component}</li>
          ))}
        </ol>

        {/* 스켈레톤 */}
        <div className="mt-2">
          <span className="sr-only">로딩중</span>
          <ContentCard.Skeleton />
          <ContentCard.Skeleton />
          <ContentCard.Skeleton />
        </div>
      </Section>
    );
  },
  40
);
