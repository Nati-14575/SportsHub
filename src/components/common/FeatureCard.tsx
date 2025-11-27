import { Card } from "../ui/Card";
import { H3, P } from "../ui/Typography";
import { Button } from "../ui/Button";
import { IconBadge } from "./IconBadge";
import { NavLink } from "react-router";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  color?: "primary" | "secondary";
  link: string;
  buttonText: string;
}

const bulletColorMap = {
  primary: "text-primary",
  secondary: "text-secondary",
};

export default function FeatureCard({
  icon,
  title,
  description,
  bullets,
  color = "primary",
  link,
  buttonText,
}: FeatureCardProps) {
  return (
    <Card className="p-6 space-y-6 shadow-xl border border-base-300/40">
      {/* Header */}
      <div className="flex items-center gap-4">
        <IconBadge icon={icon} color={color} />
        <H3>{title}</H3>
      </div>

      {/* Description */}
      <P>{description}</P>

      {/* Bullets */}
      <div className="space-y-2">
        {bullets.map((text, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className={bulletColorMap[color]}>●</span>
            <span className="text-base-content/80">{text}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <NavLink to={link}>
        <Button variant={color} full>
          {buttonText}
        </Button>
      </NavLink>
    </Card>
  );
}
