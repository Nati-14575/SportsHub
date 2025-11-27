import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface StatusBadgeProps {
  status?: string | null;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const normalized = status?.toLowerCase() || "not started";

  const config = {
    live: {
      color: "badge-error text-white animate-pulse",
      label: "LIVE",
      dot: "bg-white",
    },
    finished: {
      color: "badge-neutral text-neutral-content",
      label: "Finished",
      dot: "bg-neutral-content",
    },
    "in progress": {
      color: "badge-success text-white",
      label: "In Progress",
      dot: "bg-white",
    },
    "not started": {
      color: "badge-info text-info-content",
      label: "Not Started",
      dot: "bg-info-content",
    },
  };

  const style =
    config[normalized as keyof typeof config] ?? config["not started"];

  return (
    <Badge
      className={cn(
        "px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow",
        style.color
      )}
    >
      <span className={cn("w-2 h-2 rounded-full", style.dot)} />
      {style.label}
    </Badge>
  );
}
