import { Link } from "react-router";

import { Card } from "@/components/ui/Card";
import { CardImage } from "@/components/ui/CardImage";
import { CardTitle } from "@/components/ui/CardTitle";
import { Badge } from "@/components/ui/Badge";
import { ButtonGhostFade } from "@/components/ui/ButtonGhostFade";
import type { Team } from "../../types/team.types";

interface Props {
  team: Team;
}

export default function TeamCard({ team }: Props) {
  return (
    <Link to={`/teams/${team.idTeam}`} className="group block">
      <Card className="overflow-hidden">
        <CardImage src={team.strBadge} alt={team.strTeam} />

        <div className="card-body p-6 pt-4 text-center">
          <CardTitle>{team.strTeam}</CardTitle>

          <div className="space-y-2 mt-2">
            <p className="text-sm font-medium text-base-content/80 group-hover:text-base-content transition-colors duration-300">
              {team.strLeague}
            </p>

            {team.strSport && <Badge>{team.strSport}</Badge>}

            {team.strCountry && (
              <p className="text-xs text-base-content/60 group-hover:text-base-content/70 transition-colors duration-300">
                {team.strCountry}
              </p>
            )}
          </div>

          <div className="card-actions justify-center mt-4">
            <ButtonGhostFade>
              View Details
              <svg
                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </ButtonGhostFade>
          </div>
        </div>
      </Card>
    </Link>
  );
}
