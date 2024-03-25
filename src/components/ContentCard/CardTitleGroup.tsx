import { Content } from "@/models/contents";

export const CardTitleGroup = ({
  title,
  subtitle,
}: Pick<Content, "title" | "subtitle">) => {
  return (
    <div className="flex-1 w-1 pl-1">
      <h3 className="truncate mb-1">{title}</h3>
      <p className="truncate text-neutral-400">{subtitle}</p>
    </div>
  );
};
