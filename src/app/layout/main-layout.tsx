import { Outlet, NavLink } from "react-router";
import ThemeToggle from "@/components/common/ThemeToggle";
import { ROUTES } from "../../constants/routes";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-base-200 via-base-100 to-primary/10 dark:from-base-300 dark:via-base-200 dark:to-primary/5 font-sans">
      {/* Enhanced Navbar */}
      <nav className="navbar bg-base-100/80 dark:bg-base-300/80 backdrop-blur-lg shadow-xl border-b border-base-300 dark:border-base-100/20 sticky top-0 z-50 px-4 lg:px-8 transition-colors duration-300">
        <div className="flex-1">
          <NavLink
            to={ROUTES.HOME}
            className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-all duration-300 font-heading tracking-tight"
          >
            🏆 SportsHub
          </NavLink>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal gap-2 lg:gap-4 px-1 font-sans">
            <li>
              <NavLink
                to={ROUTES.TEAMS}
                className={({ isActive }) =>
                  `btn btn-ghost rounded-btn font-semibold transition-all duration-300 hover:scale-105 gap-2 font-medium ${
                    isActive
                      ? "bg-primary text-primary-content shadow-lg scale-105 border-2 border-primary"
                      : "hover:bg-base-300 dark:hover:bg-base-200"
                  }`
                }
              >
                👥 Teams
              </NavLink>
            </li>

            <li>
              <NavLink
                to={ROUTES.LIVE_SCORES}
                className={({ isActive }) =>
                  `btn btn-ghost rounded-btn font-semibold transition-all duration-300 hover:scale-105 gap-2 font-medium ${
                    isActive
                      ? "bg-secondary text-secondary-content shadow-lg scale-105 border-2 border-secondary"
                      : "hover:bg-base-300 dark:hover:bg-base-200"
                  }`
                }
              >
                ⚡ Live Scores
              </NavLink>
            </li>

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow py-4 mx-auto w-full h-full bg-base-100 ">
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <footer className="bg-base-300/30 dark:bg-base-300/10 border-t border-base-500 dark:border-base-100/20 py-6 transition-colors duration-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-base-content/60 dark:text-base-content/40 font-sans">
          <p className="text-sm">
            © 2024 SportsHub. The ultimate sports destination.
          </p>
        </div>
      </footer>
    </div>
  );
}
