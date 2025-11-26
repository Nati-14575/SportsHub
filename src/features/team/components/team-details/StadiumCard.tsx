import { Globe, MapPin, Users } from "lucide-react";
import type { Team } from "../../types/team.types";

export default function StadiumCard({ team }: { team: Team }) {
  return (
    <div className="card bg-base-100 p-6 shadow-xl border rounded-3xl hover:shadow-2xl transition-all">
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-3">
        <MapPin className="w-6 h-6 text-primary" />
        Stadium
      </h2>

      <div className="space-y-3">
        <p className="text-lg font-semibold">{team.strStadium}</p>

        {team.strLocation && (
          <p className="text-base-content/70 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            {team.strLocation}
          </p>
        )}

        {team.intStadiumCapacity && (
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-2xl">
            <Users className="w-4 h-4" />
            <span className="font-bold">
              {Number(team.intStadiumCapacity).toLocaleString()}
            </span>
            <span className="text-sm">capacity</span>
          </div>
        )}
      </div>
    </div>
  );
}
