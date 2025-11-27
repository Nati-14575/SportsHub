export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="
      card-title text-xl font-heading font-bold text-center 
      text-base-content group-hover:text-primary 
      transition-colors duration-300 line-clamp-2
    "
    >
      {children}
    </h2>
  );
}
