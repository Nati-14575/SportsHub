export function StatusDot({ status }: { status?: string | null }) {
  const color = status === "Live"
    ? "bg-success"
    : status === "Finished"
    ? "bg-neutral"
    : "bg-info";

  return (
    <span className={`w-3 h-3 rounded-full ${color} ${status === "Live" ? "animate-ping" : ""}`} />
  );
}
