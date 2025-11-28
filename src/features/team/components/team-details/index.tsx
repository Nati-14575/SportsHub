import { Spinner } from "@/components/ui/Spinner";
import { useTeamDetails } from "../../hooks/useTeamDetails";
import { TeamDetails } from "./TeamDetails";

export default function TeamDetailsSection({ teamId }: { teamId?: string }) {
  const { team, loading, error } = useTeamDetails(teamId!);

  if (loading) {
    return (
      <div className="flex justify-center pt-20">
        <Spinner />
      </div>
    );
  }

  if (error || !team) {
    return (
      <div className="text-center pt-20">
        <p className="text-red-400">{error ?? "Team not found."}</p>
      </div>
    );
  }

  return <TeamDetails team={team} />;
}
