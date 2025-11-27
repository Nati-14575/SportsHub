import { cn } from "@/lib/utils";
import { H2, P } from "@/components/ui/Typography";

interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  icon?: string | React.ReactNode;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  icon,
  center = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        center ? "text-center flex flex-col items-center" : "text-left",
        className
      )}
    >
      {/* ICON */}
      {icon && (
        <div className="relative mb-2">
          {typeof icon === "string" ? (
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg text-3xl">
              {icon}
            </div>
          ) : (
            icon
          )}
        </div>
      )}

      {/* TITLE */}
      <H2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {title}
      </H2>

      {/* SUBTITLE */}
      {subtitle && (
        <P
          className={cn("text-base-content/70", center && "max-w-2xl mx-auto")}
        >
          {subtitle}
        </P>
      )}
    </div>
  );
}
