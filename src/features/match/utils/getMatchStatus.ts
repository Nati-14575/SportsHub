import type { Match } from "../types/match.types";

export function getMatchStatus(match: Match) {
  const status = match.strStatus;
  const homeScore = match.intHomeScore;
  const awayScore = match.intAwayScore;

  // EXPLICIT API STATUSES
  if (status === "Live") return "live";
  if (status === "Finished") return "finished";

  // IF SCORES EXIST, IT'S FINISHED
  const scoresExist =
    homeScore !== null &&
    homeScore !== undefined &&
    awayScore !== null &&
    awayScore !== undefined;

  if (scoresExist) return "finished";

  // BUILD EVENT DATE
  if (!match.dateEvent || !match.strTime) return "upcoming";

  const kickoff = new Date(`${match.dateEvent}T${match.strTime}`);
  const now = new Date();

  // IF EVENT IS IN THE FUTURE
  if (kickoff > now) return "upcoming";

  // IF MORE THAN 120 MINS PASSED → FINISHED
  const diffMs = now.getTime() - kickoff.getTime();
  const diffMinutes = diffMs / 1000 / 60;

  if (diffMinutes > 120) return "finished";

  // OTHERWISE → TREAT AS LIVE
  return "live";
}
