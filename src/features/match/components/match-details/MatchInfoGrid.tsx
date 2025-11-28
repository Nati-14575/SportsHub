import { Clock, MapPin, Trophy, Users, Flag } from "lucide-react";
import type { Match } from "../../../match/types/match.types";
import { MatchInfoCard } from "./MatchInfoCard";

interface Props {
  match: Match;
  kickoff: Date | null;
}

export function MatchInfoGrid({ match, kickoff }: Props) {
  const dateString = kickoff
    ? kickoff.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const timeString = kickoff
    ? kickoff.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {kickoff && (
        <MatchInfoCard
          icon={<Clock className="w-6 h-6 text-primary" />}
          label="Kickoff Time"
          value={
            <div className="space-y-1">
              <div className="font-semibold text-lg">{timeString}</div>
              <div className="text-sm text-base-content/60">{dateString}</div>
            </div>
          }
          accent="primary"
        />
      )}

      {match.strVenue && (
        <MatchInfoCard
          icon={<MapPin className="w-6 h-6 text-secondary" />}
          label="Venue"
          value={
            <div className="space-y-1">
              <div className="font-semibold text-lg">{match.strVenue}</div>
              {(match.strCity || match.strCountry) && (
                <div className="text-sm text-base-content/60">
                  {match.strCity}
                  {match.strCity && match.strCountry && ", "}
                  {match.strCountry}
                </div>
              )}
            </div>
          }
          accent="secondary"
        />
      )}

      <MatchInfoCard
        icon={<Trophy className="w-6 h-6 text-secondary" />}
        label="Competition"
        value={
          <div className="space-y-1">
            <div className="font-semibold text-lg">{match.strLeague}</div>
            {match.strSeason && (
              <div className="text-sm text-base-content/60">
                {match.strSeason}
              </div>
            )}
          </div>
        }
        accent="accent"
      />

      {match.intSpectators && (
        <MatchInfoCard
          icon={<Users className="w-6 h-6 text-success" />}
          label="Attendance"
          value={
            <div className="font-semibold text-lg">
              {parseInt(match.intSpectators).toLocaleString()}
            </div>
          }
          accent="success"
        />
      )}

      <MatchInfoCard
        icon={<Flag className="w-6 h-6 text-info" />}
        label="Match Status"
        value={
          <div className="font-semibold text-lg capitalize">
            {match.strStatus?.toLowerCase() || "not started"}
          </div>
        }
        accent="info"
      />
    </div>
  );
}
