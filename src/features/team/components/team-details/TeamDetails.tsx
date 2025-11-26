import type { Team } from "../../types/team.types";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import TeamBanner from "./TeamBanner";
import TeamHeader from "./TeamHeader";
import StadiumCard from "./StadiumCard";
import SocialLinksCard from "./SocialLinksCard";
import DescriptionCard from "./DescriptionCard";
import JerseyCard from "./JerseyCard";
import BackButton from "@/components/common/BackButton";

export interface SocialLink {
  url: string | null | undefined;
  icon: LucideIcon;
  color: "primary" | "info" | "secondary" | "error" | string;
}

interface Props {
  team: Team;
}

export function TeamDetails({ team }: Props) {
  const banner =
    team.strBanner ||
    team.strFanart1 ||
    team.strFanart2 ||
    team.strFanart3 ||
    "";

  const socialLinks: SocialLink[] = [
    {
      url: team.strFacebook,
      icon: Facebook,
      color: "primary",
    },
    {
      url: team.strTwitter,
      icon: Twitter,
      color: "info",
    },
    {
      url: team.strInstagram,
      icon: Instagram,
      color: "secondary",
    },
    {
      url: team.strYoutube,
      icon: Youtube,
      color: "error",
    },
  ].filter((s) => s.url);

  const buildUrl = (url?: string | null) => {
    if (!url) return "#";
    return `https://${url.replace(/^https?:\/\//, "")}`;
  };

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      <BackButton />
      {/* Banner */}
      {banner && <TeamBanner src={banner} alt={team.strTeam} />}

      {/* Header Info */}
      <TeamHeader team={team} />

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {team.strStadium && <StadiumCard team={team} />}

          {socialLinks.length > 0 && (
            <SocialLinksCard links={socialLinks} buildUrl={buildUrl} />
          )}
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          {team.strDescriptionEN && (
            <DescriptionCard description={team.strDescriptionEN} />
          )}

          {team.strEquipment && (
            <JerseyCard src={team.strEquipment} color="accent" />
          )}
        </div>
      </div>
    </div>
  );
}
