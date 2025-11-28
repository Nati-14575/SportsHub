import { Card } from "@/components/ui/Card";
import { H3 } from "@/components/ui/Typography";
import type { SocialLink } from "./TeamDetails";

const COLOR_MAP: Record<string, string> = {
  primary: "border-primary text-primary hover:bg-primary hover:text-primary-content",
  secondary:
    "border-secondary text-secondary hover:bg-secondary hover:text-secondary-content",
  accent: "border-accent text-accent hover:bg-accent hover:text-accent-content",
  info: "border-info text-info hover:bg-info hover:text-info-content",
  error: "border-error text-error hover:bg-error hover:text-error-content",
};

export default function SocialLinksCard({
  links,
  buildUrl,
}: {
  links: SocialLink[];
  buildUrl: (url: string | null | undefined) => string;
}) {
  return (
    <Card className="p-6 space-y-4 shadow-xl border border-base-300/40">
      <H3>Follow the Team</H3>

      <div className="flex gap-4 flex-wrap">
        {links.map(({ url, icon: Icon, color }, index) => (
          <a
            key={index}
            href={buildUrl(url)}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-circle btn-outline transition-all ${COLOR_MAP[color] ?? COLOR_MAP["primary"]}`}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </Card>
  );
}
