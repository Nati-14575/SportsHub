import { useEffect, useState } from "react";
import { getTeamDetails } from "../api/teamApi";
import type { Team } from "../types/team.types";

interface UseTeamDetailsReturn {
  team: Team | null;
  loading: boolean;
  error: string | null;
}

export function useTeamDetails(teamId: string): UseTeamDetailsReturn {
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!teamId) return;

    let ignore = false;

    getTeamDetails(teamId)
      .then((data) => {
        if (!ignore) setTeam(data);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [teamId]);

  return { team, loading, error };
}
