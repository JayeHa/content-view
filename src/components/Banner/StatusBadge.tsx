type Status = "beforeStart" | "inProgress" | "completed";

const STATUS_STYLE: Record<Status, string> = {
  beforeStart: "bg-rose-600",
  inProgress: "bg-primary",
  completed: "bg-gray-800",
};

export type StatusBadgeProps = {
  status: Status;
  text: string;
};

export const StatusBadge = ({ status, text }: StatusBadgeProps) => {
  return (
    <span
      className={`rounded text-center px-1 shadow border inline-block w-16 truncate opacity-90 text-clip
       ${STATUS_STYLE[status]}`}
    >
      <span className="text-white text-sm font-light">{text}</span>
    </span>
  );
};
