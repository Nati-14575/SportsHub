interface MatchInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  accent?: "primary" | "secondary" | "accent" | "success" | "info";
}

export function MatchInfoCard({
  icon,
  label,
  value,
  accent = "primary",
}: MatchInfoCardProps) {
  const accentStyles = {
    primary: "border-l-primary",
    secondary: "border-l-secondary",
    accent: "border-l-accent",
    success: "border-l-green-500",
    info: "border-l-blue-500",
  };

  return (
    <div
      className={`card bg-base-100 shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-l-4 ${accentStyles[accent]}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-base-200 rounded-2xl">{icon}</div>
        <h3 className="text-lg font-bold text-base-content/80">{label}</h3>
      </div>

      <div className="text-base-content">{value}</div>
    </div>
  );
}
