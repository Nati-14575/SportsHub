import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

interface BackButtonProps {
  label?: string;
}

export function BackButton({ label = "Back" }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="btn btn-ghost gap-2 rounded-full shadow-sm hover:shadow-md transition-all px-4 text-base-content/70 hover:text-base-content"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
