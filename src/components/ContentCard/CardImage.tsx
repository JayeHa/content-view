import { Image } from "@components/Image";

type Props = {
  src: string;
};

export const CardImage = ({ src }: Props) => {
  return (
    <div className="size-16 overflow-hidden rounded shrink-0 pointer-events-none">
      <Image src={src} />
    </div>
  );
};
