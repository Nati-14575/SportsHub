import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent";
}

export function Badge({ children, color = "primary" }: BadgeProps) {
  return (
    <div
      className={cn(
        "badge badge-outline badge-sm transition-colors duration-300",
        `border-${color}/30 text-${color}/80 group-hover:border-${color} group-hover:text-${color}`
      )}
    >
      {children}
    </div>
  );
}
