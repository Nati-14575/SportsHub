import type { SocialLink } from "./TeamDetails";

export function SocialLinksCard({
  links,
  buildUrl,
}: {
  links: SocialLink[];
  buildUrl: (url: string | null | undefined) => string;
}) {
  return (
    <div className="card bg-base-100 p-6 shadow-xl border rounded-3xl hover:shadow-2xl transition-all">
      <h2 className="text-2xl font-heading font-semibold mb-4">
        Follow the Team
      </h2>

      <div className="flex gap-4 justify-center lg:justify-start">
        {links.map(({ url, icon: Icon, color }) => (
          <a
            key={url}
            href={buildUrl(url)}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-circle btn-outline border-${color} text-${color} hover:bg-${color} hover:text-${color}-content hover:scale-110 transition-all`}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
