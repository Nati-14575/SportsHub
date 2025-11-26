export default function InfoChip({
  icon: Icon,
  value,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-full border border-base-300">
      <Icon className={`w-4 h-4 text-${color}`} />
      <span className="font-medium">{value}</span>
    </div>
  );
}
