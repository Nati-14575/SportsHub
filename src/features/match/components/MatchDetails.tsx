import { useMatchDetails } from "../hooks/useMatchDetails";
import BackButton from "@/components/common/BackButton";
import { MatchDetailsSection } from "./match-details/MatchDetailsSection";

export default function MatchDetails({ matchId }: { matchId: string }) {
  const { match, loading, error } = useMatchDetails(matchId!);
  if (loading)
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-lg text-primary"></span>
      </div>
    );

  if (error || !match)
    return (
      <div className="text-center py-20 text-error">
        {error || "Match not found."}
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <BackButton label="Matches" />
      <MatchDetailsSection match={match} />
    </div>
  );
}
