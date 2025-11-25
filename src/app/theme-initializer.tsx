import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";

export function ThemeInitializer() {
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return null;
}
