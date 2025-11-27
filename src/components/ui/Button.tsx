import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  full?: boolean;
}

export function Button({
  children,
  variant = "primary",
  full = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(`btn btn-${variant}`, full && "w-full", className)}
      {...props}
    >
      {children}
    </button>
  );
}
