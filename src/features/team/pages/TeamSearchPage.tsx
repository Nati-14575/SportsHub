import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useTeamSearch } from "../hooks/useTeamSearch";
import HeaderSection from "../components/team-search/HeaderSection";
import { SearchInput } from "../components/team-search/SearchInput";
import { LoadingTeamsSection } from "../components/team-search/LoadingTeamsSection";
import { ErrorSection } from "../components/team-search/ErrorSection";
import {
  EmptyInitial,
  EmptyNoResults,
} from "../components/team-search/EmptyState";
import { ResultsGrid } from "../components/team-search/ResultsGrid";
export default function TeamSearchPage() {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 400);

  const { data: teams, loading, error } = useTeamSearch(debouncedSearch);

  const showInitialState = !debouncedSearch && !loading;
  const showNoResults = debouncedSearch && !loading && teams.length === 0;

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <HeaderSection />

      <SearchInput value={search} onChange={setSearch} />

      {loading && <LoadingTeamsSection />}
      {error && <ErrorSection message={error} />}

      {showInitialState && <EmptyInitial />}
      {showNoResults && (
        <EmptyNoResults query={debouncedSearch} clear={() => setSearch("")} />
      )}

      {teams.length > 0 && (
        <ResultsGrid query={debouncedSearch} teams={teams} />
      )}
    </div>
  );
}
