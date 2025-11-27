import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export default function BackButton({
  label = "Back",
  className,
}: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      onClick={() => navigate(-1)}
      className={cn(
        "gap-2 rounded-full shadow-sm hover:shadow-md px-4 text-base-content/70 hover:text-base-content",
        className
      )}
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </Button>
  );
}
