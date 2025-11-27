export function EmptyInitialState({
  title = "Start your search",
  subtitle = "Enter a query to begin",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center py-12 space-y-4">
      <div className="w-20 h-20 mx-auto bg-base-200 rounded-3xl flex items-center justify-center">
        👀
      </div>
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-base-content/60">{subtitle}</p>
    </div>
  );
}

export function EmptyNoResults({
  query,
  clear,
}: {
  query: string;
  clear: () => void;
}) {
  return (
    <div className="text-center py-12 space-y-4">
      <div className="w-20 h-20 mx-auto bg-base-200 rounded-3xl flex items-center justify-center">
        ❌
      </div>
      <p className="text-xl font-semibold">No results found</p>
      <p className="text-base-content/60">
        Nothing found for <span className="font-bold">{query}</span>
      </p>
      <button onClick={clear} className="btn btn-outline btn-sm">
        Clear Search
      </button>
    </div>
  );
}
