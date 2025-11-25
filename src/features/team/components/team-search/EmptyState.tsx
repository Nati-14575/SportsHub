import { SadIcon, SearchBigIcon } from "./Icons";

function EmptyState({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle: React.ReactNode;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center py-12 space-y-4">
      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-base-200 to-base-300 rounded-3xl flex items-center justify-center shadow-inner">
        {icon}
      </div>

      <p className="text-xl font-semibold text-base-content/60">{title}</p>
      <p className="text-base-content/50 max-w-md mx-auto">{subtitle}</p>

      {children}
    </div>
  );
}

function EmptyInitial() {
  return (
    <EmptyState
      title="Start your search"
      subtitle="Enter a team name above to discover teams, leagues, and sports from around the world"
      icon={<SearchBigIcon />}
    />
  );
}

function EmptyNoResults({
  query,
  clear,
}: {
  query: string;
  clear: () => void;
}) {
  return (
    <EmptyState
      title="No teams found"
      subtitle={
        <>
          No results found for{" "}
          <span className="font-semibold text-base-content/70">"{query}"</span>
        </>
      }
      icon={<SadIcon />}
    >
      <button className="btn btn-outline btn-sm mt-3" onClick={clear}>
        Clear Search
      </button>
    </EmptyState>
  );
}

export { EmptyInitial, EmptyNoResults, EmptyState };
