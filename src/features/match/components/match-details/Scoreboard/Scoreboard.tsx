import type { Match } from "@/features/match/types/match.types";
import { TeamSide } from "./TeamSide";
import { Card } from "@/components/ui/Card";
import { LiveBadge } from "../LiveBadge";

interface Props {
  match: Match;
}

export function Scoreboard({ match }: Props) {
  const isFinished = match.strStatus === "Finished";
  const isLive = match.strStatus === "Live";
  const isUpcoming = !isLive && !isFinished;

  const homeScore = match.intHomeScore ?? "0";
  const awayScore = match.intAwayScore ?? "0";

  const homeWins = isFinished && +homeScore > +awayScore;
  const awayWins = isFinished && +awayScore > +homeScore;

  return (
    <Card className="relative p-8 shadow-xl rounded-3xl overflow-hidden">
      <div className="grid grid-cols-3 items-center gap-8">
        <TeamSide
          name={match.strHomeTeam}
          badge={match.strHomeTeamBadge}
          isWinner={homeWins}
        />

        {/* SCORE */}
        <div className="text-center space-y-4">
          {isUpcoming ? (
            <div className="text-2xl font-black text-base-content/40">VS</div>
          ) : (
            <div className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {homeScore} : {awayScore}
            </div>
          )}

          {isLive && <LiveBadge className="mx-auto" />}
        </div>

        <TeamSide
          name={match.strAwayTeam}
          badge={match.strAwayTeamBadge}
          isWinner={awayWins}
        />
      </div>
    </Card>
  );
}
