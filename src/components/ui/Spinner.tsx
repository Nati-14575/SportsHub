import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  className?: string;
}

const sizeMap = {
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
};

export function Spinner({
  size = "md",
  color = "primary",
  className,
}: SpinnerProps) {
  return (
    <span
      className={cn("loading", sizeMap[size], `text-${color}`, className)}
    />
  );
}
