import { toggleTheme } from "@/store/themeSlice";
import { useAppDispatch, useAppSelector } from "@/app/reduxHooks";
import { SunIcon, MoonIcon } from "lucide-react";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.theme.mode);

  return (
    <button className="btn btn-ghost" onClick={() => dispatch(toggleTheme())}>
      {mode === "light" ? <MoonIcon size={18} /> : <SunIcon size={18} />}
    </button>
  );
}
