import { TeamBadgeMini } from "./TeamBadgeMini";

interface MatchCardTeamsProps {
  name: string;
  badge?: string | null;
  score?: string | null;
  opponentScore?: string | null;
  status?: string | null;
  align?: "left" | "right";
}

export function MatchCardTeams({
  name,
  badge,
  score,
  opponentScore,
  status,
  align = "left",
}: MatchCardTeamsProps) {
  const isFinished = status === "Finished";

  const isWinner = Boolean(
    isFinished &&
      score != null &&
      opponentScore != null &&
      Number(score) > Number(opponentScore)
  );

  return (
    <TeamBadgeMini
      name={name}
      badge={badge}
      isWinner={isWinner}
      align={align}
    />
  );
}
