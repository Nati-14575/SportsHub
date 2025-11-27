import { Card } from "@/components/ui/Card";
import { H3, P } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

interface MatchInfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  accent?: "primary" | "secondary" | "accent" | "success" | "info";
  className?: string;
}

export function MatchInfoCard({
  icon,
  label,
  value,
  accent = "primary",
  className,
}: MatchInfoCardProps) {
  const accentMap: Record<string, string> = {
    primary: "border-l-primary",
    secondary: "border-l-secondary",
    accent: "border-l-accent",
    success: "border-l-success",
    info: "border-l-info",
  };

  return (
    <Card
      className={cn(
        "rounded-2xl p-6 border-l-4 shadow-xl hover:shadow-2xl",
        accentMap[accent],
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-base-200 rounded-2xl">{icon}</div>
        <H3 className="text-lg">{label}</H3>
      </div>

      <P className="text-base-content">{value}</P>
    </Card>
  );
}
