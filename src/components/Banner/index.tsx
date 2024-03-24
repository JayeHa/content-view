import { Image } from "@components/Image";
import { Link } from "react-router-dom";
import { StatusBadge } from "./StatusBadge";
import { getStatusOfDurationWithDday } from "./utils";

export type Duration = {
  start: string;
  end: string;
};

export type BannerType = {
  category: string;
  title: string;
  image: string;
  bgColor?: string;
  link?: {
    url: string;
    name?: string;
  };
  duration: Duration;
};

type Props = {
  data: BannerType;
};

export const Banner = ({
  data: { category, title, image, link, duration, bgColor },
}: Props) => {
  const status = getStatusOfDurationWithDday(duration);

  const content = (
    <>
      <header>
        <div className="absolute z-10 top-2 right-2">
          <StatusBadge {...status} />
        </div>
        <div
          className="h-36 bg-gray-300 flex-center"
          style={{ background: bgColor }}
        >
          <Image src={image} style={{ objectFit: "cover", aspectRatio: 6 }} />
        </div>
      </header>

      <div className="px-2 pt-3 pb-5">
        <div className="flex justify-between items-center gap-8">
          <h3 className="truncate">
            {category && <strong className="mr-1">[{category}]</strong>}
            {title}
          </h3>
          {link?.name && (
            <span className="flex-shrink-0 border border-primary px-2 text-sm text-primary font-semibold rounded-lg">
              {link.name}
            </span>
          )}
        </div>
        {/* TODO: */}
        <div className="text-end text-xs mt-3 text-gray-500">
          {duration.start} - {duration.end}(KST)
        </div>
      </div>
    </>
  );

  return (
    <article className="bg-white rounded-lg shadow-md relative">
      {link?.url ? <Link to={link.url}>{content}</Link> : content}
    </article>
  );
};
