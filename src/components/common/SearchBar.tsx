interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}: SearchBarProps) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder={placeholder}
        className="input input-lg w-full pl-12 pr-12 bg-base-100 border-2 border-base-300 
                   focus:border-primary focus:ring-4 focus:ring-primary/20 
                   rounded-2xl shadow-lg transition-all"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {/* Search Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50">
        <svg className="w-5 h-5" stroke="currentColor" fill="none">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Clear */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-circle btn-xs btn-ghost"
        >
          ✕
        </button>
      )}
    </div>
  );
}
