export default function LoadingState({
  label = "Loading...",
}: {
  label?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-base-content/60 font-medium animate-pulse">{label}</p>
    </div>
  );
}
