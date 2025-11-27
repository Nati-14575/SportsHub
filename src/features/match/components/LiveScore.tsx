import { ErrorMessage } from "@/components/common/ErrorMessage";
import { Badge } from "@/components/ui/Badge";

import { useLiveMatches } from "../hooks/useLiveMatches";
import MatchCard from "./MatchCard";
import SectionHeader from "@/components/common/SectionHeader";
import { Spinner } from "@/components/ui/Spinner";
import { EmptyInitialState } from "@/components/common/EmptyState";
export default function LiveScoreboard() {
  const { matches, loading, error } = useLiveMatches();

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* --- PAGE HEADER --- */}
      <SectionHeader
        icon="⚽"
        title="Live Scores"
        subtitle={
          <Badge color="primary" className="gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Auto-updating every 15 seconds
          </Badge>
        }
      />

      {/* --- LOADING --- */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
          <Spinner size="lg" color="primary" />
          <p className="text-base-content/60 font-medium animate-pulse">
            Fetching live matches...
          </p>
        </div>
      )}

      {/* --- ERROR --- */}
      {error && <ErrorMessage message={error} />}

      {/* --- NO MATCHES --- */}
      {!loading && matches.length === 0 && (
        <EmptyInitialState
          title="No live matches at the moment"
          subtitle="Check back later for real-time updates"
        />
      )}

      {/* --- MATCH LIST --- */}
      <div className="space-y-6">
        {matches?.map((m) => (
          <MatchCard key={m.idEvent} match={m} />
        ))}
      </div>
    </div>
  );
}
