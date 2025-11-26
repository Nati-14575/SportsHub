import type { Team } from "../../types/team.types";
import { Link } from "react-router";

interface Props {
  team: Team;
}

export default function TeamCard({ team }: Props) {
  return (
    <Link
      to={`/teams/${team.idTeam}`}
      className="group card bg-base-100 dark:bg-base-300 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 dark:border-base-100/20 rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-2 active:scale-95"
    >
      <figure className="p-6 bg-gradient-to-br from-base-200 via-base-100 to-primary/5 dark:from-base-300 dark:via-base-200 dark:to-primary/10 group-hover:from-primary/10 group-hover:to-secondary/5 transition-all duration-300">
        <img
          src={team.strBadge ?? ""}
          alt={team.strTeam}
          className="h-24 w-24 object-contain drop-shadow-lg group-hover:drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/api/placeholder/96/96";
            (e.target as HTMLImageElement).className =
              "h-24 w-24 object-cover rounded-full bg-base-300 opacity-50";
          }}
        />
      </figure>

      <div className="card-body p-6 pt-4 text-center">
        <h2 className="card-title text-xl font-heading font-bold justify-center text-base-content group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {team.strTeam}
        </h2>

        <div className="space-y-2 mt-2">
          <p className="text-sm font-medium text-base-content/80 dark:text-base-content/70 group-hover:text-base-content transition-colors duration-300">
            {team.strLeague}
          </p>

          {team.strSport && (
            <div className="badge badge-outline badge-sm border-primary/30 text-primary/80 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
              {team.strSport}
            </div>
          )}

          {team.strCountry && (
            <p className="text-xs text-base-content/60 dark:text-base-content/50 group-hover:text-base-content/70 transition-colors duration-300">
              {team.strCountry}
            </p>
          )}
        </div>

        <div className="card-actions justify-center mt-4">
          <button className="btn btn-primary btn-sm rounded-full px-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            View Details
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
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
          </button>
        </div>
      </div>
    </Link>
  );
}
