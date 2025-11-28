import { TrendingUp, Users } from "lucide-react";
import { ROUTES } from "@/constants/routes";

import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/features/landing/components/FeatureCard";

export default function HomePage() {
  return (
    <div className="h-full w-full">
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Explore Sports Data" 
            subtitle="Discover comprehensive sports information, live scores, and team details all in one place"
            className="mb-12 sm:mb-16 lg:mb-20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12">
            <FeatureCard
              icon={<Users className="w-10 h-10 sm:w-12 sm:h-12" />}
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
              icon={<TrendingUp className="w-10 h-10 sm:w-12 sm:h-12" />}
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
