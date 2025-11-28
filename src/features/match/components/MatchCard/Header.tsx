import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function MatchCardHeader({
  league,
  season,
}: {
  league?: string | null;
  season?: string | null;
}) {
  if (!league && !season) return null;

  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      {league && (
        <Badge color="accent" className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-secondary" />
          {league}
        </Badge>
      )}

      {season && (
        <span className="text-xs text-base-content/60 font-medium">
          {season}
        </span>
      )}
    </div>
  );
}
