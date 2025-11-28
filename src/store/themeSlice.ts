import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "sportshub" | "sportshub-dark";

interface ThemeState {
  mode: ThemeMode;
}

const stored = localStorage.getItem("theme") as ThemeMode | null;
const initialMode = stored ?? "sportshub-dark";

// Initialize theme immediately on module load (before React)
if (typeof document !== "undefined") {
  document.documentElement.setAttribute("data-theme", initialMode);
}

const initialState: ThemeState = {
  mode: initialMode,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
      document.documentElement.setAttribute("data-theme", action.payload);
    },

    toggleTheme: (state) => {
      state.mode = state.mode === "sportshub" ? "sportshub-dark" : "sportshub";
      localStorage.setItem("theme", state.mode);
      document.documentElement.setAttribute("data-theme", state.mode);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
