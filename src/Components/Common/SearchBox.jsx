import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

function SearchBox() {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search) {
      console.log("Searching for:", search); // Replace with actual search logic
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full shadow-md px-2 py-2 w-full max-w-2xl mx-auto">
      <input
        type="text"
        value={search}
        placeholder="Search for products, brands, and more..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-grow bg-gray-100 text-gray-700 placeholder-gray-500 p-2 focus:outline-none text-sm"
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center bg-blue-900 hover:bg-blue-700 text-white p-2.5 rounded-full transition duration-150 ml-2"
      >
        <MdOutlineSearch className="text-xl" />
      </button>
    </div>
  );
}

export default SearchBox;
