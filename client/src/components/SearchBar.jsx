import React from "react";

function SearchBar({ value, onChange, placeholder = "Search...", className = "" }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
      />
    </div>
  );
}

export default SearchBar;
// SearchBar.jsx