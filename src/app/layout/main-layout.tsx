import ThemeToggle from "@/components/ui/ThemeToggle";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-base-200">
      <nav className="navbar bg-base-100 shadow-md px-4">
        <div className="flex-1 text-xl font-bold">SportsHub</div>
        <ThemeToggle />
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
