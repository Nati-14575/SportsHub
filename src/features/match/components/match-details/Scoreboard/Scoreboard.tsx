import type { Match } from "@/features/match/types/match.types";
import { TeamSide } from "./TeamSide";
import { Card } from "@/components/ui/Card";
import { LiveBadge } from "../LiveBadge";
import { getMatchStatus } from "@/features/match/utils/getMatchStatus";

interface Props {
  match: Match;
}

export function Scoreboard({ match }: Props) {
  const matchStatus = getMatchStatus(match);

  const isLive = matchStatus === "live";
  const isFinished = matchStatus === "finished";
  const isUpcoming = matchStatus === "upcoming";

  const homeScore = match.intHomeScore ?? "0";
  const awayScore = match.intAwayScore ?? "0";

  const homeWins = isFinished && Number(homeScore) > Number(awayScore);
  const awayWins = isFinished && Number(awayScore) > Number(homeScore);

  return (
    <Card className="grid grid-cols-3 items-center gap-8" hover={true}>
      <TeamSide
        name={match.strHomeTeam}
        badge={match.strHomeTeamBadge}
        isWinner={homeWins}
      />

      <div className="text-center space-y-4">
        {isUpcoming ? (
          <div className="text-2xl font-black text-base-content/40">VS</div>
        ) : (
          <div className="text-5xl font-black bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
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
    </Card>
  );
}
