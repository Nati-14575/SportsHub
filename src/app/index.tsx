import { Provider } from "react-redux";
import { store } from "./store";

import { router } from "./router";
import { ThemeInitializer } from "./theme-initializer";
import { RouterProvider } from "react-router";

export function AppProvider() {
  return (
    <Provider store={store}>
      <ThemeInitializer />
      <RouterProvider router={router} />
    </Provider>
  );
}
