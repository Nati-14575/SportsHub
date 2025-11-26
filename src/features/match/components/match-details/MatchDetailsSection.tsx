import type { Match } from "../../types/match.types";
import { MatchThumbnail } from "./MatchThumbnail";
import { LeagueHeader } from "./LeagueHeader";

import { MatchInfoGrid } from "./MatchInfoGrid";
import { Scoreboard } from "./Scoreboard/Scoreboard";

interface Props {
  match: Match;
}

export function MatchDetailsSection({ match }: Props) {
  const kickoff =
    match.dateEvent && match.strTime
      ? new Date(`${match.dateEvent}T${match.strTime}`)
      : null;

  return (
    <div className="space-y-10">
      {/* Thumbnail */}
      {match.strThumb && (
        <MatchThumbnail
          thumbnail={match.strThumb}
          isLive={match.strStatus === "Live"}
        />
      )}

      {/* League Header */}
      <LeagueHeader
        league={match.strLeague ?? null}
        leagueBadge={match.strLeagueBadge}
        season={match.strSeason}
        status={match.strStatus}
      />

      {/* Scoreboard */}
      <Scoreboard match={match} />

      {/* Info Grid */}
      <MatchInfoGrid match={match} kickoff={kickoff} />
    </div>
  );
}
