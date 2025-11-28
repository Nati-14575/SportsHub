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
  // Use DaisyUI's built-in button classes for proper theme support
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    ghost: "btn-ghost",
  };

  return (
    <button
      className={cn(
        "btn rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95",
        variantClasses[variant],
        full && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
