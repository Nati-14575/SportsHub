import { useParams } from "react-router";
import { useTeamDetails } from "../hooks/useTeamDetails";
import { TeamDetails } from "../components/team-details/TeamDetails";

export default function TeamDetailsPage() {
  const { teamId } = useParams();
  const { team, loading, error } = useTeamDetails(teamId!);

  if (loading) {
    return (
      <div className="flex justify-center pt-20">
        <span className="loading loading-lg"></span>
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
