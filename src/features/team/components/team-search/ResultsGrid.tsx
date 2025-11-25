import { TeamCard } from "./TeamCard";

export function ResultsGrid({ query, teams }: { query: string; teams: any[] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-semibold">
        Search Results{" "}
        {query && (
          <span className="text-lg font-normal text-base-content/60 ml-2">
            ({teams.length} team{teams.length !== 1 ? "s" : ""} found)
          </span>
        )}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teams.map((team) => (
          <TeamCard key={team.idTeam} team={team} />
        ))}
      </div>
    </div>
  );
}
