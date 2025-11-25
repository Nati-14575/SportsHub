import { useState, useEffect } from "react";
import { searchTeams } from "../api/teamApi";
import type { Team } from "../types/team.types";

interface UseTeamSearchReturn {
  data: Team[];
  loading: boolean;
  error: string | null;
}

export function useTeamSearch(query: string): UseTeamSearchReturn {
  const [data, setData] = useState<Team[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query || query.length < 2) return;

    let active = true;
    setLoading(true);
    setError(null);

    searchTeams(query)
      .then((teams) => {
        if (active) setData(teams);
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [query]);

  return { data, loading, error };
}
