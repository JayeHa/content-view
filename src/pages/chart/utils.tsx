import { Rank } from "@/models/contents/chart";

export const calcRankIcon = ({ current, prev }: Rank) => {
  const RANK_ICON_MAP = {
    up: <div className="text-red-500 text-lg">↗</div>,
    down: <div className="text-blue-500 text-lg">↘</div>,
    new: <div className="text-orange-400 text-xs mt-1">new</div>,
    same: <div className="text-gray-400 text-2xl">-</div>,
  };

  if (!prev) return RANK_ICON_MAP["new"];
  if (current > prev) return RANK_ICON_MAP["up"];
  if (current < prev) return RANK_ICON_MAP["down"];
  if (current === prev) return RANK_ICON_MAP["same"];
};
