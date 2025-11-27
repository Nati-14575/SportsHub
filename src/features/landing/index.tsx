import { TrendingUp, Users } from "lucide-react";
import { ROUTES } from "@/constants/routes";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/common/FeatureCard";

export default function HomePage() {
  return (
    <div className="bg-base-100">
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Explore Sports Data" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Team Search & Details"
              description="Search for any sports team and explore comprehensive details including jerseys, stadium information, social media links and history."
              bullets={[
                "Search teams by name",
                "View detailed team profiles",
                "Explore stadium and jersey information",
              ]}
              color="primary"
              link={ROUTES.TEAMS}
              buttonText="Explore Teams"
            />

            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Live Scoreboard"
              description="Follow live matches with real-time updates, detailed match insights and match analytics."
              bullets={[
                "Real-time score updates",
                "Polling every 15 seconds",
                "Detailed match analytics",
              ]}
              color="secondary"
              link={ROUTES.LIVE_SCORES}
              buttonText="View Live Scores"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
