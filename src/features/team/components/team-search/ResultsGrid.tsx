import Grid from "@/components/ui/Grid";
import TeamCard from "./TeamCard";

export default function ResultsGrid({
  query,
  teams,
}: {
  query: string;
  teams: any[];
}) {
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

      <Grid>
        {teams.map((team) => (
          <TeamCard key={team.idTeam} team={team} />
        ))}
      </Grid>
    </div>
  );
}
