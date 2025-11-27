interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center space-y-3" : "space-y-2"}>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {title}
      </h1>

      {subtitle && (
        <p className="text-base-content/70 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
