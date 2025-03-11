import React from "react";

const SearchBar: React.FC<{ search: string; setSearch: (s: string) => void; petsAllowed: boolean; setPetsAllowed: (p: boolean) => void; }> = ({ search, setSearch, petsAllowed, setPetsAllowed }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search events..." className="border p-2 rounded-md" />
      <label>
        <input type="checkbox" checked={petsAllowed} onChange={() => setPetsAllowed(!petsAllowed)} /> Pets Allowed
      </label>
    </div>
  );
};

export default SearchBar;