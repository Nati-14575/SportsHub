import { useEffect, useState } from "react";

import type { Match } from "../types/match.types";
import { fetchLiveMatches } from "../api/matchApi";

export function useLiveMatches(pollInterval = 15000) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const loadMatches = async () => {
    try {
      const data = await fetchLiveMatches();
      setMatches(data);
      setError("");
    } catch (err) {
      setError("Failed to load live matches");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMatches();

    const id = setInterval(loadMatches, pollInterval);
    return () => clearInterval(id);
  }, [pollInterval]);

  return { matches, loading, error };
}
