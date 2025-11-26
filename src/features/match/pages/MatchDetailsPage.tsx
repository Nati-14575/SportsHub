import { useParams } from "react-router";
import MatchDetails from "../components/MatchDetails";

const MatchDetailsPage = () => {
  const { matchId } = useParams();

  return <MatchDetails matchId={matchId!} />;
};

export default MatchDetailsPage;
