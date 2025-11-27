import { Calendar, Flag, Shirt } from "lucide-react";
import type { Team } from "../../types/team.types";
import InfoChip from "./InfoChip";
import { H2, P } from "@/components/ui/Typography";

export default function TeamHeader({ team }: { team: Team }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 bg-base-100/80 backdrop-blur-lg rounded-3xl shadow-xl border border-base-300/50">
      {/* Badge */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        <img
          src={team.strBadge ?? ""}
          alt={team.strTeam}
          className="h-32 w-32 lg:h-40 lg:w-40 object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex-1 text-center lg:text-left space-y-4">
       
        <H2 className="text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {team.strTeam}
        </H2>

        <P className="text-base-content/70 text-lg">{team.strLeague}</P>
        

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
          <InfoChip icon={Flag} value={team.strCountry ?? ""} color="primary" />

          {team.intFormedYear && (
            <InfoChip
              icon={Calendar}
              value={`Since ${team.intFormedYear}`}
              color="secondary"
            />
          )}

          {team.strSport && (
            <InfoChip icon={Shirt} value={team.strSport} color="accent" />
          )}
        </div>
      </div>
    </div>
  );
}
