import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent";
  className?: string;
}

const colorMap = {
  primary: {
    base: "border-primary/30 text-primary/80",
    hover: "group-hover:border-primary group-hover:text-primary",
  },
  secondary: {
    base: "border-secondary/30 text-secondary/80",
    hover: "group-hover:border-secondary group-hover:text-secondary",
  },
  accent: {
    base: "border-accent/30 text-accent/80",
    hover: "group-hover:border-accent group-hover:text-accent",
  },
};

export function Badge({ children, color = "primary", className }: BadgeProps) {
  const colors = colorMap[color];

  return (
    <div
      className={cn(
        "badge badge-sm transition-colors duration-300",
        colors.base,
        colors.hover,
        className
      )}
    >
      {children}
    </div>
  );
}
