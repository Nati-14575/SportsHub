import type { Match } from "../../types/match.types";
import { MatchThumbnail } from "./MatchThumbnail";
import { LeagueHeader } from "./LeagueHeader";
import { Scoreboard } from "./Scoreboard/Scoreboard";

import { Card } from "@/components/ui/Card";
import SectionHeader from "@/components/common/SectionHeader";
import { MatchInfoGrid } from "./MatchInfoGrid";

interface MatchDetailsSectionProps {
  match: Match;
}

export function MatchDetailsSection({ match }: MatchDetailsSectionProps) {
  const kickoff =
    match.dateEvent && match.strTime
      ? new Date(`${match.dateEvent}T${match.strTime}`)
      : null;

  return (
    <div className="space-y-10">
      {/* === Thumbnail section === */}
      {match.strThumb && (
        <MatchThumbnail
          thumbnail={match.strThumb}
          isLive={match.strStatus === "Live"}
        />
      )}

      {/* === League Header === */}
      <LeagueHeader
        league={match.strLeague ?? ""}
        leagueBadge={match.strLeagueBadge}
        season={match.strSeason}
        status={match.strStatus}
      />

      {/* === Scoreboard === */}
      <Card className="p-6 shadow-xl border border-base-300/50">
        <Scoreboard match={match} />
      </Card>

      {/* === Match Info Grid === */}
      <Card className="p-6 shadow-xl border border-base-300/50">
        <SectionHeader
          title="Match Information"
          subtitle="Venue, kickoff time, competition & more"
          className="mb-4"
        />
        <MatchInfoGrid match={match} kickoff={kickoff} />
      </Card>
    </div>
  );
}
