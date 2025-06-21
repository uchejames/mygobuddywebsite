import React from "react";
import { MapPin, Calendar, Search } from "lucide-react";

function SearchBar({ value, onChange, placeholder = "Where are you going?", className = "", onSearch }) {
  return (
    <div className={`flex justify-center w-full px-4 ${className}`}>
      <div className="flex items-center bg-white rounded-full shadow-xl border border-neutral max-w-5xl w-full overflow-hidden">

        {/* Location Field */}
        <div className="flex items-center gap-3 flex-1 px-5 py-4 hover:bg-neutral transition-colors cursor-pointer">
          <MapPin className="w-5 h-5 text-primary" />
          <div className="flex flex-col w-full">
            <label className="text-xs text-gray-500 font-medium">Location</label>
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="text-sm text-gray-700 font-poppins bg-transparent border-none outline-none w-full placeholder-gray-400"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-neutral" />

        {/* Date Field */}
        <div className="flex items-center gap-3 flex-1 px-5 py-4 hover:bg-neutral transition-colors cursor-pointer">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 font-medium">Date</label>
            <span className="text-sm text-gray-700 font-poppins">Add date</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-neutral" />

        {/* Check Out Field */}
        <div className="flex items-center gap-3 flex-1 px-5 py-4 hover:bg-neutral transition-colors cursor-pointer">
          <Calendar className="w-5 h-5 text-primary" />
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 font-medium">Check out</label>
            <span className="text-sm text-gray-700 font-poppins">Add date</span>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={onSearch}
          className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-full font-semibold transition-all ml-3 mr-4 whitespace-nowrap"
        >
          <Search className="w-5 h-5 inline-block "  />
           Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
