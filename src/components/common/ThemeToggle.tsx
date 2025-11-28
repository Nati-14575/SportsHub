import { toggleTheme } from "@/store/themeSlice";
import { useAppDispatch, useAppSelector } from "@/app/reduxHooks";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.theme.mode);

  return (
    <Button
      variant="ghost"
      className="btn-square hover:border-base-300 transition-all"
      onClick={() => dispatch(toggleTheme())}
    >
      {mode === "sportshub" ? <MoonIcon size={18} /> : <SunIcon size={18} />}
    </Button>
  );
}
