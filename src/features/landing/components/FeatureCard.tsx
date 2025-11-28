import { Card } from "../../../components/ui/Card";
import { H3, P } from "../../../components/ui/Typography";
import { Button } from "../../../components/ui/Button";
import { IconBadge } from "../../../components/common/IconBadge";
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
  const gradientMap = {
    primary: "from-primary/5",
    secondary: "from-secondary/5",
  };

  return (
    <Card className="group relative p-8 sm:p-10 space-y-6 sm:space-y-8 shadow-2xl border border-base-300/50 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
      {/* Gradient Background Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientMap[color]} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="flex-shrink-0">
            <IconBadge icon={icon} color={color} />
          </div>
          <H3 className="text-xl sm:text-2xl font-bold leading-tight">{title}</H3>
        </div>

        {/* Description */}
        <P className="text-base sm:text-lg text-base-content/70 leading-relaxed">
          {description}
        </P>

        {/* Bullets */}
        <div className="space-y-3 sm:space-y-4 pt-2">
          {bullets.map((text, i) => (
            <div key={i} className="flex items-start gap-3 group/item">
              <span className={`${bulletColorMap[color]} text-xl sm:text-2xl mt-0.5 group-hover/item:scale-125 transition-transform duration-300`}>●</span>
              <span className="text-base sm:text-lg text-base-content/80 flex-1 leading-relaxed">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <NavLink to={link} className="block">
            <Button 
              variant={color} 
              full
              className="h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {buttonText}
            </Button>
          </NavLink>
        </div>
      </div>
    </Card>
  );
}
