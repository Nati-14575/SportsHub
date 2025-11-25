export function TeamBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-48 md:h-80 rounded-3xl overflow-hidden shadow-2xl relative group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-base-100/30 to-transparent"></div>
    </div>
  );
}
