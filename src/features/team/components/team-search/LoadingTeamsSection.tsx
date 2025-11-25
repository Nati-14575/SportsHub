export function LoadingTeamsSection() {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <div className="relative">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <div className="absolute inset-0 loading loading-spinner loading-lg text-secondary opacity-30"></div>
      </div>

      <p className="text-base-content/60 font-medium animate-pulse">
        Searching for teams...
      </p>
    </div>
  );
}
