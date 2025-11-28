import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useTeamSearch } from "../../hooks/useTeamSearch";

import { EmptyNoResults } from "@/components/common/EmptyState";
import ResultsGrid from "../../components/team-search/ResultsGrid";
import SearchBar from "@/components/common/SearchBar";
import LoadingState from "@/components/common/LoadingState";
import { ErrorMessage } from "@/components/common/ErrorMessage";
import SectionHeader from "@/components/common/SectionHeader";
export default function TeamSearch() {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 400);

  const { data: teams, loading, error } = useTeamSearch(debouncedSearch);

  const showNoResults = debouncedSearch && !loading && teams.length === 0;

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <SectionHeader
        title="Discover Teams"
        subtitle="Search across thousands of sports teams worldwide"
        className="mt-4"
      />

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search teams..."
      />

      {loading && <LoadingState label="Searching for teams..." />}
      {error && <ErrorMessage message={error} />}

      {showNoResults && (
        <EmptyNoResults query={debouncedSearch} clear={() => setSearch("")} />
      )}

      {!loading && teams.length > 0 && (
        <ResultsGrid query={debouncedSearch} teams={teams} />
      )}
    </div>
  );
}
