export function StatusDot({ status }: { status?: string | null }) {
  const color = status === "Live"
    ? "bg-green-500"
    : status === "Finished"
    ? "bg-gray-500"
    : "bg-blue-500";

  return (
    <span className={`w-3 h-3 rounded-full ${color} ${status === "Live" ? "animate-ping" : ""}`} />
  );
}
