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
        "space-y-4 sm:space-y-5 lg:space-y-6",
        center ? "text-center flex flex-col items-center" : "text-left",
        className
      )}
    >
      {/* ICON */}
      {icon && (
        <div className="relative mb-2 group">
          {typeof icon === "string" ? (
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl text-3xl sm:text-4xl lg:text-5xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">{icon}</span>
            </div>
          ) : (
            icon
          )}
        </div>
      )}

      {/* TITLE */}
      <H2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight tracking-tight">
        {title}
      </H2>

      {/* SUBTITLE */}
      {subtitle && (
        <P
          className={cn(
            "text-base sm:text-lg lg:text-xl text-base-content/70 leading-relaxed",
            center && "max-w-3xl mx-auto px-4"
          )}
        >
          {subtitle}
        </P>
      )}
    </div>
  );
}
