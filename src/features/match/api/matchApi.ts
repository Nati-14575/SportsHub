import { api } from "@/lib/axios";
import type { LiveMatchesResponse } from "../types/match.types";

export async function fetchLiveMatches() {
  const res = await api.get<LiveMatchesResponse>("/eventsnext.php?id=133602");

  return res.data.events ?? [];
}
