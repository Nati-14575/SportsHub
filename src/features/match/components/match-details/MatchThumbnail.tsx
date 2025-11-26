interface Props {
  thumbnail: string;
  isLive: boolean;
}

export function MatchThumbnail({ thumbnail, isLive }: Props) {
  return (
    <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl group">
      <img
        src={thumbnail}
        alt="Match thumbnail"
        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-transparent to-base-100/20" />

      {isLive && (
        <div className="absolute top-4 right-4">
          <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse flex items-center gap-2 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            LIVE NOW
          </div>
        </div>
      )}
    </div>
  );
}
