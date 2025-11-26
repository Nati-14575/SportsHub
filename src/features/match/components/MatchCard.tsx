import { Clock, MapPin, Shirt, Trophy, Users, Calendar } from "lucide-react";
import { Link } from "react-router";
import type { Match } from "../types/match.types";

export default function MatchCard({ match }: { match: Match }) {
  const {
    strHomeTeam,
    strAwayTeam,
    intHomeScore,
    intAwayScore,
    strStatus,
    idEvent,
    strHomeTeamBadge,
    strAwayTeamBadge,
    strLeague,
    strVenue,
    strSeason,
    dateEvent,
    strTime,
    intSpectators,
  } = match;

  const isLive = strStatus === "Live";
  const isFinished = strStatus === "Finished";
  const isUpcoming = !isLive && !isFinished;

  // Format match date and time
  const matchDate = dateEvent ? new Date(dateEvent) : null;
  const displayTime =
    strTime ||
    (matchDate
      ? matchDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      : null);

  return (
    <Link to={`/live-matches/${idEvent}`}>
      <div className="group relative bg-gradient-to-br from-base-100 via-base-100 to-base-200 border border-base-300/80 shadow-lg hover:shadow-2xl transition-all duration-500 p-6 rounded-3xl hover:scale-[1.02] overflow-hidden my-4">
        {/* Animated background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Live match indicator bar */}
        {isLive && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 animate-pulse" />
        )}

        <div className="relative z-10">
          {/* League and Season Header */}
          {(strLeague || strSeason) && (
            <div className="flex items-center justify-center gap-3 mb-4">
              {strLeague && (
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="badge badge-outline badge-sm font-semibold">
                    {strLeague}
                  </span>
                </div>
              )}
              {strSeason && (
                <span className="text-xs text-base-content/60 font-medium">
                  {strSeason}
                </span>
              )}
            </div>
          )}

          {/* Match Status and Details */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  isLive
                    ? "bg-green-500 animate-ping"
                    : isFinished
                    ? "bg-gray-500"
                    : "bg-blue-500"
                }`}
              />
              <span
                className={`text-sm font-bold ${
                  isLive
                    ? "text-green-600"
                    : isFinished
                    ? "text-gray-600"
                    : "text-blue-600"
                }`}
              >
                {strStatus ?? "UPCOMING"}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-base-content/60">
              {/* Match Date */}
              {matchDate && isUpcoming && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">
                    {matchDate.toLocaleDateString([], {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}

              {/* Match Time */}
              {displayTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">{displayTime}</span>
                </div>
              )}

              {/* Match Progress */}
              {!isUpcoming && (
                <span className="font-semibold">
                  {isFinished ? "FT" : "LIVE"}
                </span>
              )}
            </div>
          </div>

          {/* Teams and Score */}
          <div className="flex items-center justify-between gap-6 mb-4">
            {/* Home Team */}
            <TeamSide
              name={strHomeTeam}
              badge={strHomeTeamBadge || undefined}
              align="right"
              isWinner={
                isFinished &&
                intHomeScore &&
                intAwayScore &&
                parseInt(intHomeScore) > parseInt(intAwayScore)
                  ? true
                  : undefined
              }
            />

            {/* Score Display */}
            <div className="text-center space-y-2">
              <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {intHomeScore ?? "0"} : {intAwayScore ?? "0"}
              </div>

              {/* Live Match Badge */}
              {isLive && (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                    Live Now
                  </span>
                </div>
              )}

              {/* Final Score Indicator */}
              {isFinished && (
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Final
                </span>
              )}
            </div>

            {/* Away Team */}
            <TeamSide
              name={strAwayTeam}
              badge={strAwayTeamBadge || undefined}
              align="left"
              isWinner={
                isFinished &&
                intHomeScore &&
                intAwayScore &&
                parseInt(intAwayScore) > parseInt(intHomeScore)
                  ? true
                  : undefined
              }
            />
          </div>

          {/* Additional Match Info */}
          <div className="flex items-center justify-between pt-4 border-t border-base-300/50">
            {/* Venue */}
            {strVenue && (
              <div className="flex items-center gap-2 text-xs text-base-content/60">
                <MapPin className="w-3 h-3" />
                <span className="max-w-[120px] truncate font-medium">
                  {strVenue}
                </span>
              </div>
            )}

            {/* Spectators */}
            {intSpectators && (
              <div className="flex items-center gap-2 text-xs text-base-content/60">
                <Users className="w-3 h-3" />
                <span className="font-medium">
                  {parseInt(intSpectators).toLocaleString()}
                </span>
              </div>
            )}

            {/* CTA Indicator */}
            <div className="text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function TeamSide({
  name,
  badge,
  align,
  isWinner = false,
}: {
  name: string;
  badge?: string;
  align: "left" | "right";
  isWinner?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-3 ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {/* Team Badge */}
      <div
        className={`relative ${
          isWinner
            ? "ring-2 ring-yellow-400 ring-offset-2 ring-offset-base-100"
            : ""
        }`}
      >
        {badge ? (
          <div className="w-16 h-16 bg-base-200 rounded-2xl p-3 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <img
              src={badge}
              alt={name}
              className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all"
            />
          </div>
        ) : (
          <div className="w-16 h-16 bg-base-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <Shirt className="w-8 h-8 text-base-content/50" />
          </div>
        )}

        {/* Winner Crown */}
        {isWinner && (
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-yellow-900">👑</span>
          </div>
        )}
      </div>

      {/* Team Name */}
      <span
        className={`font-bold text-base leading-tight max-w-[120px] ${
          isWinner ? "text-yellow-600" : "text-base-content"
        }`}
      >
        {name}
      </span>
    </div>
  );
}
