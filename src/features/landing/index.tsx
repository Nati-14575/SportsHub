import { TrendingUp, Users, Star } from "lucide-react";
import { NavLink } from "react-router";

export default function HomePage() {
  return (
    <div className=" bg-base-100">
      {/* Hero Section */}
      {/* <section className="hero bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 min-h-[35vh]">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SportsHub
            </h1>
            <p className="py-6 text-xl text-base-content/70">
              Your ultimate destination for live sports scores, team analytics,
              and match details
            </p>

            <div className="max-w-2xl mx-auto">
              <NavLink to="/teams">
                <button className="btn btn-primary btn-lg w-full max-w-md">
                  <Search className="w-5 h-5" />
                  Search Teams & Matches
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Sports Data
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Search Flow */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="card-title text-2xl">Team Search & Details</h3>
                </div>

                <p className="text-base-content/70 mb-6">
                  Search for any sports team and explore comprehensive details
                  including jerseys, stadium information, social media links,
                  and team history.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span>Search teams by name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span>View detailed team profiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span>Explore stadium and jersey information</span>
                  </div>
                </div>

                <div className="card-actions">
                  <NavLink to="/teams" className="btn btn-primary w-full">
                    Explore Teams
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Live Scores Flow */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="card-title text-2xl">Live Scoreboard</h3>
                </div>

                <p className="text-base-content/70 mb-6">
                  Follow live matches with real-time updates, detailed match
                  statistics, goal scorers, lineups, and comprehensive match
                  analysis.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span>Real-time score updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span>Live match polling every 15 seconds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-secondary" />
                    <span>Detailed match analytics</span>
                  </div>
                </div>

                <div className="card-actions">
                  <NavLink
                    to="/live-matches"
                    className="btn btn-secondary w-full"
                  >
                    View Live Scores
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
