import React, { useState } from "react";
import "./styles.css"

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
    setQuery("");
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="material-symbols-outlined" onClick={handleSearch}>
        search
      </span>
    </div>
  );
}

export default SearchBar;
