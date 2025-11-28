import { Trophy } from "lucide-react";

interface Props {
  name: string;
  badge?: string | null;
  isWinner?: boolean;
}

export function TeamSide({ name, badge, isWinner = false }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`relative ${
          isWinner ? "scale-110" : "scale-100"
        } transition-transform`}
      >
        {badge ? (
          <div className="w-24 h-24 bg-base-200 rounded-2xl p-4 flex items-center justify-center shadow-lg border-2 border-base-300">
            <img src={badge} className="w-20 h-20 object-contain" alt={name} />
          </div>
        ) : (
          <div className="w-24 h-24 bg-base-200 rounded-2xl flex items-center justify-center shadow-lg border-2 border-base-300">
            <Trophy className="w-12 h-12 text-base-content/40" />
          </div>
        )}

        {isWinner && (
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-base-100">
            <span className="text-xs font-bold">👑</span>
          </div>
        )}
      </div>

      <p
        className={`font-bold text-xl ${
          isWinner ? "text-secondary" : "text-base-content"
        }`}
      >
        {name}
      </p>
    </div>
  );
}
