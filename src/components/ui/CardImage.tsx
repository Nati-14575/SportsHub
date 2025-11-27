interface CardImageProps {
  src?: string | null;
  alt: string;
}

export function CardImage({ src, alt }: CardImageProps) {
  return (
    <figure
      className="
      p-6 bg-gradient-to-br from-base-200 via-base-100 to-primary/5 
      dark:from-base-300 dark:via-base-200 dark:to-primary/10 
      transition-all duration-300 group-hover:from-primary/10 
      group-hover:to-secondary/5 flex items-center justify-center
    "
    >
      <img
        src={src || "/api/placeholder/96/96"}
        alt={alt}
        className="
          h-24 w-24 object-contain drop-shadow-lg 
          group-hover:drop-shadow-xl group-hover:scale-110 
          transition-transform duration-300
        "
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.src = "/api/placeholder/96/96";
          img.className =
            "h-24 w-24 object-cover rounded-full bg-base-300 opacity-50";
        }}
      />
    </figure>
  );
}
