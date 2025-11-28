import { Link } from "react-router";
import { Card } from "@/components/ui/Card";
import { MatchCardHeader } from "./MatchCard/Header";
import { MatchCardStatus } from "./MatchCard/Status";
import { MatchCardTeams } from "./MatchCard/Teams";
import { MatchCardScore } from "./MatchCard/Score";
import { MatchCardFooter } from "./MatchCard/Footer";
import { ROUTES } from "@/constants/routes";

import type { Match } from "../types/match.types";

export default function MatchCard({ match }: { match: Match }) {
  const isLive = match.strStatus === "Live";

  return (
    <Link to={ROUTES.MATCH_DETAILS.replace(":matchId", match.idEvent)}>
      <Card
        className="group relative p-6 mb-5 border rounded-3xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden"
        hover={true}
      >
        {/* LIVE BAR */}
        {isLive && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-success animate-pulse" />
        )}

        <div className="relative z-10 space-y-6">
          {/* HEADER */}
          <MatchCardHeader league={match.strLeague} season={match.strSeason} />

          {/* STATUS */}
          <MatchCardStatus
            status={match.strStatus}
            date={match.dateEvent}
            time={match.strTime}
          />

          {/* TEAMS + SCORE */}
          <div className="grid grid-cols-3 items-center gap-6 my-4">
            {/* HOME TEAM */}
            <MatchCardTeams
              name={match.strHomeTeam}
              badge={match.strHomeTeamBadge}
              score={match.intHomeScore}
              opponentScore={match.intAwayScore}
              align="right"
              status={match.strStatus}
            />

            {/* SCORE */}
            <MatchCardScore
              home={match.intHomeScore}
              away={match.intAwayScore}
              status={match.strStatus}
            />

            {/* AWAY TEAM */}
            <MatchCardTeams
              name={match.strAwayTeam}
              badge={match.strAwayTeamBadge}
              score={match.intAwayScore}
              opponentScore={match.intHomeScore}
              align="left"
              status={match.strStatus}
            />
          </div>

          {/* FOOTER */}
          <MatchCardFooter
            venue={match.strVenue}
            spectators={match.intSpectators}
          />
        </div>
      </Card>
    </Link>
  );
}
