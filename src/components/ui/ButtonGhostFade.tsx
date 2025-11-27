export function ButtonGhostFade({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="
      btn btn-primary btn-sm rounded-full px-6 opacity-0 
      group-hover:opacity-100 transform translate-y-2 
      group-hover:translate-y-0 transition-all duration-300
    "
    >
      {children}
    </button>
  );
}
