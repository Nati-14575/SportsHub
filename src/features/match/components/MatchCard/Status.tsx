import { Calendar, Clock } from "lucide-react";
import { StatusDot } from "./StatusDot";

export function MatchCardStatus({
  status,
  date,
  time,
}: {
  status?: string | null;
  date?: string | null;
  time?: string | null;
}) {
  const isLive = status === "Live";
  const isFinished = status === "Finished";
  const isUpcoming = !isLive && !isFinished;

  const dateObj = date ? new Date(date) : null;

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <StatusDot status={status} />
        <span className="text-sm font-bold capitalize">
          {status ?? "Upcoming"}
        </span>
      </div>

      <div className="flex items-center gap-3 text-sm text-base-content/60">
        {/* Date */}
        {isUpcoming && dateObj && (
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {dateObj.toLocaleDateString([], { month: "short", day: "numeric" })}
          </div>
        )}

        {/* Time */}
        {time && (
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {time}
          </div>
        )}

        {!isUpcoming && (
          <span className="font-semibold">{isFinished ? "FT" : "LIVE"}</span>
        )}
      </div>
    </div>
  );
}
