import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BuddyCard from "../components/BuddyCard";
import SearchBar from "../components/SearchBar";
import buddiesData from "../data/buddies";

function Buddies() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const filteredBuddies = buddiesData.filter(
    (buddy) =>
      buddy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buddy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        Meet Your Buddies
      </h1>

      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or expertise..."
        className="mb-10"
      />

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
// Buddies.jsx