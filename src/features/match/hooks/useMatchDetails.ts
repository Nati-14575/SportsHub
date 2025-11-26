import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

import type { Match } from "../types/match.types";

interface Response {
  events: Match[] | null;
}

export function useMatchDetails(id: string) {
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      const res = await api.get<Response>(`/lookupevent.php?id=${id}`);
      setMatch(res.data.events?.[0] ?? null);
    } catch {
      setError("Failed to load match details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  return { match, loading, error };
}
