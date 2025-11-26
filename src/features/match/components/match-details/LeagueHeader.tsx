import { MatchStatusBadge } from "./MatchStatusBadge";

interface Props {
  league: string | null;
  leagueBadge?: string | null;
  season?: string | null;
  status?: string | null;
}

export function LeagueHeader({ league, leagueBadge, season, status }: Props) {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-4">
        {leagueBadge && (
          <img
            src={leagueBadge}
            alt="League"
            className="h-12 w-12 bg-base-200 p-2 rounded-2xl shadow-lg object-contain"
          />
        )}

        <div className="text-left">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {league}
          </h2>
          {season && (
            <p className="text-base-content/60 font-medium">{season}</p>
          )}
        </div>
      </div>

      <MatchStatusBadge status={status} />
    </div>
  );
}
