import type { Match } from "../types/match.types";

export function getMatchStatus(match: Match) {
  const status = match.strStatus;
  const homeScore = match.intHomeScore;
  const awayScore = match.intAwayScore;

  // 1. Explicit API statuses
  if (status === "Live") return "live";
  if (status === "Finished") return "finished";

  // 2. If scores exist, it's finished
  const scoresExist =
    homeScore !== null &&
    homeScore !== undefined &&
    awayScore !== null &&
    awayScore !== undefined;

  if (scoresExist) return "finished";

  // 3. Build event date
  if (!match.dateEvent || !match.strTime) return "upcoming";

  const kickoff = new Date(`${match.dateEvent}T${match.strTime}`);
  const now = new Date();

  // 4. If event is in the future
  if (kickoff > now) return "upcoming";

  // 5. If more than 120 mins passed → finished
  const diffMs = now.getTime() - kickoff.getTime();
  const diffMinutes = diffMs / 1000 / 60;

  if (diffMinutes > 120) return "finished";

  // 6. Otherwise → treat as live
  return "live";
}
