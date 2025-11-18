import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex justify-center my-4" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search recipes..."
        className="border p-2 w-1/2 rounded-l"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 rounded-r">Search</button>
    </form>
  );
};

export default SearchBar;
