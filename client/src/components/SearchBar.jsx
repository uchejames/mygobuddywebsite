import React, { useState } from "react";
import { MapPin, Calendar, Search, Menu, X } from "lucide-react";

function SearchBar({ value, onChange, placeholder = "Where are you going?", className = "", onSearch }) {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const handleMobileToggle = () => {
    setIsMobileExpanded(!isMobileExpanded);
  };

  return (
    <div className={`flex justify-center w-full px-4 ${className}`}>
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex items-center bg-white bg-opacity-50 rounded-full shadow-xl my-2 py-2 max-w-5xl w-full overflow-hidden">
        
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
          className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-full font-semibold transition-all ml-3 mr-4 whitespace-nowrap flex items-center gap-2"
        >
          <Search className="w-5 h-5" />
          Search
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full max-w-md">
        {/* Compact Search Bar */}
        <div 
          className="bg-white rounded-full shadow-xl border border-neutral overflow-hidden cursor-pointer"
          onClick={handleMobileToggle}
        >
          <div className="flex items-center px-4 py-3">
            <Search className="w-5 h-5 text-primary mr-3" />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-700 font-poppins">
                {value || "Where & when?"}
              </div>
              <div className="text-xs text-gray-500">
                Tap to search • Add dates
              </div>
            </div>
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Expanded Mobile Search */}
        {isMobileExpanded && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral">
              <h2 className="text-lg font-semibold text-primary font-poppins">Search</h2>
              <button
                onClick={handleMobileToggle}
                className="p-2 hover:bg-neutral rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Search Form */}
            <div className="p-4 space-y-4">
              
              {/* Location Field */}
              <div className="bg-white border border-neutral rounded-lg p-4 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="flex flex-col w-full">
                    <label className="text-xs text-gray-500 font-medium mb-1">Location</label>
                    <input
                      type="text"
                      value={value}
                      onChange={onChange}
                      placeholder={placeholder}
                      className="text-base text-gray-700 font-poppins bg-transparent border-none outline-none w-full placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Date Fields */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border border-neutral rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex flex-col">
                      <label className="text-xs text-gray-500 font-medium mb-1">Check in</label>
                      <span className="text-base text-gray-700 font-poppins">Add date</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-neutral rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex flex-col">
                      <label className="text-xs text-gray-500 font-medium mb-1">Check out</label>
                      <span className="text-base text-gray-700 font-poppins">Add date</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={() => {
                  onSearch && onSearch();
                  setIsMobileExpanded(false);
                }}
                className="w-full bg-secondary hover:bg-primary text-white py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-base"
              >
                <Search className="w-5 h-5" />
                Search Buddies
              </button>

              {/* Quick Suggestions */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-3 font-poppins">Popular locations</h3>
                <div className="space-y-2">
                  {['New York', 'Los Angeles', 'Chicago', 'Miami', 'Seattle'].map((city) => (
                    <button
                      key={city}
                      className="w-full text-left p-3 bg-neutral rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        onChange && onChange({ target: { value: city } });
                        setIsMobileExpanded(false);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-700 font-poppins">{city}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tablet Layout (sm to md) */}
      <div className="hidden sm:flex md:hidden items-center bg-white rounded-2xl shadow-xl border border-neutral w-full overflow-hidden">
        
        {/* Location Field */}
        <div className="flex items-center gap-2 flex-1 px-4 py-3 hover:bg-neutral transition-colors cursor-pointer">
          <MapPin className="w-4 h-4 text-primary" />
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
        <div className="w-px h-8 bg-neutral" />

        {/* Dates Combined */}
        <div className="flex items-center gap-2 flex-1 px-4 py-3 hover:bg-neutral transition-colors cursor-pointer">
          <Calendar className="w-4 h-4 text-primary" />
          <div className="flex flex-col">
            <label className="text-xs text-gray-500 font-medium">Dates</label>
            <span className="text-sm text-gray-700 font-poppins">Add dates</span>
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={onSearch}
          className="bg-secondary hover:bg-primary text-white px-4 py-2 rounded-full font-semibold transition-all ml-2 mr-3 flex items-center gap-1"
        >
          <Search className="w-4 h-4" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;