import { Card } from "@/components/ui/Card";
import { H3 } from "@/components/ui/Typography";
import { Shirt } from "lucide-react";

const COLOR_MAP = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  error: "text-error",
  success: "text-success",
};

interface JerseyCardProps {
  src: string;
  color?: keyof typeof COLOR_MAP;
}

export default function JerseyCard({ src, color = "accent" }: JerseyCardProps) {
  return (
    <Card className="p-8 space-y-6">
      <H3 className="flex items-center gap-3">
        <Shirt className={`w-6 h-6 ${COLOR_MAP[color]}`} />
        Team Jersey
      </H3>

      <div className="flex justify-center">
        <img
          src={src}
          alt="Team Jersey"
          className="h-64 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </Card>
  );
}
