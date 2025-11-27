import { Card } from "@/components/ui/Card";
import { H3, P } from "@/components/ui/Typography";
import { Globe, MapPin, Users } from "lucide-react";
import type { Team } from "../../types/team.types";

export default function StadiumCard({ team }: { team: Team }) {
  return (
    <Card className="p-6 space-y-4 shadow-xl border border-base-300/40">
      <H3 className="flex items-center gap-3">
        <MapPin className="w-6 h-6 text-primary" />
        Stadium
      </H3>

      <div className="space-y-3">
        <P className="text-lg font-semibold">{team.strStadium}</P>

        {team.strLocation && (
          <P className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            {team.strLocation}
          </P>
        )}

        {team.intStadiumCapacity && (
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-2xl w-fit">
            <Users className="w-4 h-4" />
            <span className="font-bold">
              {Number(team.intStadiumCapacity).toLocaleString()}
            </span>
            <span className="text-sm text-primary/80">capacity</span>
          </div>
        )}
      </div>
    </Card>
  );
}
