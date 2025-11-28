import { cn } from "@/lib/utils";

export function LiveBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 bg-primary text-white px-4 py-2",
        "rounded-full font-bold text-sm shadow-lg animate-pulse",
        className
      )}
    >
      <span className="w-2 h-2 bg-white rounded-full animate-ping" />
      LIVE
    </div>
  );
}
