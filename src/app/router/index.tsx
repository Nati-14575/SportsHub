import React from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { ROUTES } from "../../constants/routes";
// Layouts
import MainLayout from "@/app/layout/main-layout";
import EmptyLayout from "@/app/layout/empty-layout";

// Lazy-loaded Pages
const TeamSearchPage = React.lazy(
  () => import("@/features/team/pages/TeamSearchPage")
);

const HomePage = React.lazy(() => import("@/features/landing"));

const TeamDetailsPage = React.lazy(
  () => import("@/features/team/pages/TeamDetailsPage")
);

const LiveScoreboardPage = React.lazy(
  () => import("@/features/match/pages/LiveScoreboardPage")
);

const MatchDetailsPage = React.lazy(
  () => import("@/features/match/pages/MatchDetailsPage")
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <React.Suspense fallback={<div className="p-10">Loading...</div>}>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: ROUTES.TEAMS,
        element: (
          <React.Suspense fallback={<div className="p-10">Loading...</div>}>
            <TeamSearchPage />
          </React.Suspense>
        ),
      },
      {
        path: ROUTES.LIVE_SCORES,
        element: (
          <React.Suspense fallback={<div className="p-10">Loading...</div>}>
            <LiveScoreboardPage />
          </React.Suspense>
        ),
      },
      {
        path: ROUTES.TEAM_DETAILS,
        element: (
          <React.Suspense fallback={<div className="p-10">Loading...</div>}>
            <TeamDetailsPage />
          </React.Suspense>
        ),
      },
      {
        path: ROUTES.MATCH_DETAILS,
        element: (
          <React.Suspense fallback={<div className="p-10">Loading...</div>}>
            <MatchDetailsPage />
          </React.Suspense>
        ),
      },
    ],
  },

  {
    element: <EmptyLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to={ROUTES.HOME} replace />,
      },
    ],
  },
]);
