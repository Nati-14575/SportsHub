import { useParams } from "react-router";
import TeamDetailsSection from "../components/team-details";

export default function TeamDetailsPage() {
  const { teamId } = useParams();

  return <TeamDetailsSection teamId={teamId} />;
}
