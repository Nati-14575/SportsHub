import { Provider } from "react-redux";
import { store } from "./store";

import { router } from "./router";
import { ThemeInitializer } from "./theme-initializer";
import { RouterProvider } from "react-router";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

export function AppProvider() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeInitializer />
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  );
}
