import { CardImage } from "@/components/ui/CardImage";

interface TeamBannerProps {
  src: string;
  alt: string;
}

export default function TeamBanner({ src, alt }: TeamBannerProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      {/* Banner Image */}
      <CardImage
        src={src}
        alt={alt}
        className="p-0 h-48 md:h-80 w-full"
        imgClassName="h-full w-full object-cover scale-100 group-hover:scale-105 duration-700"
        rounded="rounded-3xl"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-base-100/60 via-transparent to-base-100/10 pointer-events-none" />
    </div>
  );
}
