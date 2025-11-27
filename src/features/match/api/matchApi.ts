import { api } from "@/lib/axios";
import type { LiveMatchesResponse, Match } from "../types/match.types";
import { API } from "@/constants/api";

export async function fetchLiveMatches() {
  const res = await api.get<LiveMatchesResponse>(API.MATCHES.LIVE);

  return res.data.events ?? [];
}

export async function fetchMatchDetails(id: string): Promise<Match | null> {
  const res = await api.get<LiveMatchesResponse>(API.MATCHES.DETAILS(id));
  return res.data.events?.[0] ?? null;
}
