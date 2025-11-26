interface Props {
  status?: string | null;
}

export function MatchStatusBadge({ status }: Props) {
  const MAP = {
    Live: { color: "bg-red-500 text-white", icon: "🔴" },
    Finished: { color: "bg-gray-600 text-white", icon: "⚫" },
    "Not Started": { color: "bg-blue-500 text-white", icon: "🔵" },
  };

  const config = MAP[status as keyof typeof MAP] || MAP["Not Started"];

  return (
    <div
      className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-lg shadow-lg ${
        config.color
      } ${status === "Live" ? "animate-pulse" : ""}`}
    >
      <span>{config.icon}</span>
      <span>{status || "Not Started"}</span>
    </div>
  );
}
