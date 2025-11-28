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
        "bg-base-100 dark:bg-base-300 border border-base-300 dark:border-base-100/20 rounded-2xl shadow-lg transition-all",
        hover &&
          "hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95",
        className
      )}
    >
      {children}
    </Tag>
  );
}
