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
    <Card>
      <div className="flex items-center gap-4 mb-4">
        <IconBadge icon={icon} color={color} />
        <H3>{title}</H3>
      </div>

      <P>{description}</P>

      <div className="space-y-2 my-6">
        {bullets.map((text, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className={`text-${color}`}>●</span>
            <span>{text}</span>
          </div>
        ))}
      </div>

      <NavLink to={link}>
        <Button variant={color} full>
          {buttonText}
        </Button>
      </NavLink>
    </Card>
  );
}
