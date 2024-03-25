import { Content } from "@/models/contents";
import { ReactNode } from "react";
import { CardImage } from "./CardImage";
import { CardTitleGroup } from "./CardTitleGroup";
import { ContentCardSkeleton } from "./skeletons";

export type ContentCardProps = {
  content: Content;
  children?: ReactNode;
};

export const ContentCard = ({
  content: { src, title, subtitle, amount },
  children,
}: ContentCardProps) => {
  return (
    <article className="flex">
      <CardImage src={src} />

      <div className="flex w-full pt-2">
        {children}

        <CardTitleGroup title={title} subtitle={subtitle} />

        <div className="shrink-0 font-bold max-w-20">{amount}</div>
      </div>
    </article>
  );
};

ContentCard.Skeleton = ContentCardSkeleton;
