import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "button" | "section";
}

export function Card({
  children,
  className,
  hover = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-base-100 border border-base-300/50 rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 backdrop-blur-sm",
        hover &&
          "hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2 active:scale-[0.98] hover:border-primary/20",
        className
      )}
    >
      {children}
    </Tag>
  );
}
