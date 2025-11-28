import { H2 } from "./Typography";

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <H2
      className="
      card-title text-xl font-heading font-bold text-center 
      text-base-content group-hover:text-primary 
      transition-colors duration-300 line-clamp-2
    "
    >
      {children}
    </H2>
  );
}
