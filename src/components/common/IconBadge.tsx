interface IconBadgeProps {
  icon: React.ReactNode;
  color?: "primary" | "secondary" | "accent";
}

export function IconBadge({ icon, color = "primary" }: IconBadgeProps) {
  const colorMap = {
    primary: "bg-gradient-to-br from-primary/20 to-primary/10 text-primary border border-primary/20",
    secondary: "bg-gradient-to-br from-secondary/20 to-secondary/10 text-secondary border border-secondary/20",
    accent: "bg-gradient-to-br from-accent/20 to-accent/10 text-accent border border-accent/20",
  };

  return (
    <div className={`p-4 sm:p-5 rounded-2xl shadow-lg ${colorMap[color]} transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
      {icon}
    </div>
  );
}
