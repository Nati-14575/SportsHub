import type { Match } from "@/features/match/types/match.types";
import { TeamSide } from "./TeamSide";

interface Props {
  match: Match;
}

export function Scoreboard({ match }: Props) {
  const isFinished = match.strStatus === "Finished";
  const isLive = match.strStatus === "Live";
  const isUpcoming = !isLive && !isFinished;

  const homeScore = match.intHomeScore ?? "0";
  const awayScore = match.intAwayScore ?? "0";

  const homeWins = isFinished && +homeScore > +awayScore ? true : false;

  const awayWins = isFinished && +awayScore > +homeScore ? true : false;

  return (
    <div className="card bg-base-100 shadow-2xl p-8 rounded-3xl relative overflow-hidden">
      <div className="grid grid-cols-3 items-center gap-8 relative z-10">
        <TeamSide
          name={match.strHomeTeam}
          badge={match.strHomeTeamBadge}
          isWinner={homeWins}
        />

        <div className="text-center space-y-4">
          {isUpcoming ? (
            <div className="text-2xl font-black text-base-content/40">VS</div>
          ) : (
            <div className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {homeScore} : {awayScore}
            </div>
          )}

          {isLive && (
            <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              LIVE
            </div>
          )}
        </div>

        <TeamSide
          name={match.strAwayTeam}
          badge={match.strAwayTeamBadge}
          isWinner={awayWins}
        />
      </div>
    </div>
  );
}
