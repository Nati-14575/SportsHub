import { H2, P } from "@/components/ui/Typography";
import { StatusBadge } from "./StatusBadge";

interface LeagueHeaderProps {
  league: string;
  leagueBadge?: string | null;
  season?: string | null;
  status?: string | null;
}

export function LeagueHeader({
  league,
  leagueBadge,
  season,
  status,
}: LeagueHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* League Badge */}
      {leagueBadge && (
        <div className="p-3 bg-base-200 rounded-2xl shadow-lg border border-base-300/50">
          <img
            src={leagueBadge}
            alt={`${league} badge`}
            className="h-14 w-14 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).className = "h-14 w-14 opacity-40";
            }}
          />
        </div>
      )}

      {/* Text Content */}
      <div className="space-y-1">
        <H2 className="font-heading text-3xl md:text-4xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          {league}
        </H2>

        {season && (
          <P className="text-base-content/70 font-medium">Season {season}</P>
        )}
      </div>

      {/* Status */}
      <StatusBadge status={status} />
    </div>
  );
}
