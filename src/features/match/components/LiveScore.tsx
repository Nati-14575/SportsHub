import { useLiveMatches } from "../hooks/useLiveMatches";
import { Trophy } from "lucide-react";
import MatchCard from "./MatchCard";

export default function LiveScoreboard() {
  const { matches, loading, error } = useLiveMatches();

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <Header />

      {loading && <Loading />}
      {error && <Error message={error} />}

      {!loading && matches.length === 0 && <NoMatches />}

      {/* Match List */}
      <div className="space-y-6">
        {matches?.map((m) => (
          <MatchCard key={m.idEvent} match={m} />
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">⚽</span>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-base-100 animate-pulse"></div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Live Scores
        </h1>
      </div>
      <div className="badge badge-lg badge-outline badge-primary gap-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        Auto-updating every 15 seconds
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="loading loading-spinner loading-lg text-primary"></div>
      <p className="text-base-content/60 font-medium animate-pulse">
        Fetching live matches...
      </p>
    </div>
  );
}

function Error({ message }: { message: string }) {
  return (
    <div className="alert alert-error max-w-xl mx-auto rounded-xl">
      {message}
    </div>
  );
}

function NoMatches() {
  return (
    <div className="text-center py-16 space-y-4">
      <Trophy className="w-10 h-10 mx-auto text-base-content/30" />
      <p className="text-xl font-semibold text-base-content/70">
        No live matches at the moment
      </p>
      <p className="text-base-content/50">
        Check back later for real-time updates
      </p>
    </div>
  );
}
