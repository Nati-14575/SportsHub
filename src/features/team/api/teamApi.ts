import { api } from "@/lib/axios";
import type {
  SearchTeamsResponse,
  LookupTeamResponse,
  Team,
} from "../types/team.types";
import { API } from "@/constants/api";

export async function searchTeams(teamName: string): Promise<Team[]> {
  if (!teamName || teamName.length < 2) return [];

  const res = await api.get<SearchTeamsResponse>(API.TEAMS.SEARCH, {
    params: { t: teamName },
  });

  return res.data.teams ?? [];
}

export async function getTeamDetails(teamId: string): Promise<Team | null> {
  const res = await api.get<LookupTeamResponse>(API.TEAMS.DETAILS(teamId));

  return res.data.teams?.[0] ?? null;
}
