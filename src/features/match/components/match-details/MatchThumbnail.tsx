import { CardImage } from "@/components/ui/CardImage";
import { LiveBadge } from "./LiveBadge";

interface MatchThumbnailProps {
  thumbnail: string;
  isLive?: boolean;
}

export function MatchThumbnail({
  thumbnail,
  isLive = false,
}: MatchThumbnailProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      {/* Thumbnail */}
      <CardImage
        src={thumbnail}
        alt="Match thumbnail"
        className="h-64 md:h-80 w-full p-0 rounded-3xl overflow-hidden"
        imgClassName="h-full w-full object-cover scale-100 group-hover:scale-105 duration-700"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-base-100/80 via-transparent to-base-100/20 pointer-events-none" />

      {/* Live Badge */}
      {isLive && (
        <div className="absolute top-4 right-4 z-10">
          <LiveBadge />
        </div>
      )}
    </div>
  );
}
