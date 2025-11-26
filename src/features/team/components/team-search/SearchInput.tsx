import { ClearIcon, SearchIcon } from "./Icons";

interface SearchInputProps {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for your favorite team..."
          className="input input-lg w-full pl-12 pr-4 bg-base-100 border-2 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/20 rounded-2xl shadow-lg transition-all"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {/* Left Search Icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <SearchIcon />
        </div>

        {/* Clear Button */}
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-ghost btn-circle btn-xs text-base-content/50 hover:bg-base-300"
          >
            <ClearIcon />
          </button>
        )}
      </div>
    </div>
  );
}
