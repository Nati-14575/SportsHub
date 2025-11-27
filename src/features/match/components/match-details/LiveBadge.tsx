export function LiveBadge() {
  return (
    <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
      <span className="w-2 h-2 bg-white rounded-full animate-ping" />
      LIVE
    </div>
  );
}
