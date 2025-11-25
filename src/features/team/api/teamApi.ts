import { api } from "@/lib/axios";
import type {
  SearchTeamsResponse,
  LookupTeamResponse,
  Team,
} from "../types/team.types";

export async function searchTeams(teamName: string): Promise<Team[]> {
  if (!teamName || teamName.length < 2) return [];

  const res = await api.get<SearchTeamsResponse>("searchteams.php", {
    params: { t: teamName },
  });

  return res.data.teams ?? [];
}

export async function getTeamDetails(teamId: string): Promise<Team | null> {
  const res = await api.get<LookupTeamResponse>("lookupteam.php", {
    params: { id: teamId },
  });

  return res.data.teams?.[0] ?? null;
}
