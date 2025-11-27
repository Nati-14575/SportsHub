import { MapPin, Users } from "lucide-react";

export function MatchCardFooter({
  venue,
  spectators,
}: {
  venue?: string | null;
  spectators?: string | null;
}) {
  if (!venue && !spectators) return null;

  return (
    <div className="flex items-center justify-between pt-4 border-t border-base-300/40 text-xs text-base-content/60">
      {venue && (
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          <span className="max-w-[120px] truncate">{venue}</span>
        </div>
      )}

      {spectators && (
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          {Number(spectators).toLocaleString()}
        </div>
      )}

      <span className="text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        View Details →
      </span>
    </div>
  );
}
