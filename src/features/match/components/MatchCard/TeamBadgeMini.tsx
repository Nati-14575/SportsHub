import { Shirt } from "lucide-react";

export function TeamBadgeMini({
  name,
  badge,
  align = "left",
  isWinner,
}: {
  name: string;
  badge?: string | null;
  align?: "left" | "right";
  isWinner?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center gap-2 ${align === "right" ? "text-right" : "text-left"}`}>
      <div className={`relative ${isWinner ? "ring-2 ring-yellow-400 ring-offset-2" : ""}`}>
        {badge ? (
          <img src={badge} alt={name} className="w-14 h-14 object-contain" />
        ) : (
          <div className="w-14 h-14 bg-base-200 rounded-xl flex items-center justify-center">
            <Shirt className="w-8 h-8 text-base-content/60" />
          </div>
        )}

        {isWinner && (
          <div className="absolute -top-2 -right-2 text-yellow-600 text-xs">👑</div>
        )}
      </div>

      <span className={`font-bold text-sm max-w-[100px] truncate ${isWinner ? "text-yellow-600" : ""}`}>
        {name}
      </span>
    </div>
  );
}
