import { Outlet, NavLink } from "react-router";
import ThemeToggle from "@/components/common/ThemeToggle";
import { ROUTES } from "../../constants/routes";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-base-200 via-base-100 to-primary/5 font-sans">
      
      <nav className="navbar bg-base-100/95 backdrop-blur-xl shadow-2xl border-b border-base-300/50 sticky top-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-500">
        <div className="flex-1">
          <NavLink
            to={ROUTES.HOME}
            className="group text-2xl sm:text-3xl lg:text-4xl font-extrabold text-base-content hover:text-primary transition-all duration-300 font-heading tracking-tight relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-primary">🏆</span>
              <span className="bg-gradient-to-r from-base-content to-base-content/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80">
                SportsHub
              </span>
            </span>
          </NavLink>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal gap-1 sm:gap-2 lg:gap-4 px-1 font-sans">
            <li>
              <NavLink
                to={ROUTES.TEAMS}
                className={({ isActive }) =>
                  `btn btn-ghost rounded-xl font-semibold transition-all duration-300 gap-2 font-medium text-sm sm:text-base px-3 sm:px-4 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-content shadow-xl scale-105 border-2 border-primary/50 backdrop-blur-sm"
                      : "hover:bg-base-300/50 hover:scale-105 hover:shadow-lg"
                  }`
                }
              >
                <span className="text-lg sm:text-xl">👥</span>
                <span className="hidden sm:inline">Teams</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={ROUTES.LIVE_SCORES}
                className={({ isActive }) =>
                  `btn btn-ghost rounded-xl font-semibold transition-all duration-300 gap-2 font-medium text-sm sm:text-base px-3 sm:px-4 ${
                    isActive
                      ? "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-content shadow-xl scale-105 border-2 border-secondary/50 backdrop-blur-sm"
                      : "hover:bg-base-300/50 hover:scale-105 hover:shadow-lg"
                  }`
                }
              >
                <span className="text-lg sm:text-xl">⚡</span>
                <span className="hidden sm:inline">Live Scores</span>
              </NavLink>
            </li>

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>

      
      <main className="flex-grow py-6 sm:py-8 lg:py-12 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="bg-gradient-to-t from-base-300/40 via-base-300/20 to-transparent border-t border-base-300/30 py-8 sm:py-10 transition-colors duration-300 mt-auto backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base text-base-content/60 font-medium">
            © 2024 SportsHub. The ultimate sports destination.
          </p>
        </div>
      </footer>
    </div>
  );
}
