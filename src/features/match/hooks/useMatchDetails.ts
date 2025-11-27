import { useEffect, useState } from "react";
import type { Match } from "../types/match.types";
import { fetchMatchDetails } from "../api/matchApi";

export function useMatchDetails(id: string) {
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      const data = await fetchMatchDetails(id);
      setMatch(data);
      setError("");
    } catch (err) {
      setError("Failed to load match details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  return { match, loading, error, refetch: load };
}
