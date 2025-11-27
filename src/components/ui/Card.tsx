import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "card bg-base-200 shadow-xl p-6 rounded-2xl",
        hover && "hover:shadow-2xl transition-all",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
