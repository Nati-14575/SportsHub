interface IconBadgeProps {
  icon: React.ReactNode;
  color?: "primary" | "secondary" | "accent";
}

export function IconBadge({ icon, color = "primary" }: IconBadgeProps) {
  const colorMap = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  };

  return <div className={`p-3 rounded-lg ${colorMap[color]}`}>{icon}</div>;
}
