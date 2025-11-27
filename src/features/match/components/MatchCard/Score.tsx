export function MatchCardScore({
  home,
  away,
  status,
}: {
  home?: string | null;
  away?: string | null;
  status?: string | null;
}) {
  const isLive = status === "Live";
  const isFinished = status === "Finished";
  const isUpcoming = !isLive && !isFinished;

  return (
    <div className="text-center space-y-1">
      <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {home ?? "0"} : {away ?? "0"}
      </div>

      {isLive && (
        <span className="text-xs text-red-500 font-bold animate-pulse">
          Live Now
        </span>
      )}

      {isFinished && (
        <span className="text-xs text-gray-500 font-bold uppercase">
          Final
        </span>
      )}
    </div>
  );
}
