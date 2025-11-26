import { useEffect } from "react";
import { useAppSelector } from "@/app/reduxHooks";

export function ThemeInitializer() {
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return null;
}
