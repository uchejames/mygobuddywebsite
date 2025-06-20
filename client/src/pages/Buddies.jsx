import { useState } from "react";
import BuddyCard from "../components/BuddyCard";
import buddiesData from "../data/buddies";

function Buddies() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter buddies by name or title based on search input
  const filteredBuddies = buddiesData.filter(
    (buddy) =>
      buddy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buddy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Meet Your Buddies
      </h1>

      {/* Search Bar */}
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or expertise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
        />
      </div>

      {/* Buddy Cards */}
      {filteredBuddies.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBuddies.map((buddy) => (
            <BuddyCard key={buddy.id} {...buddy} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No buddies found.</p>
      )}
    </div>
  );
}

export default Buddies;
