import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Buddy from "../components/BuddyCard";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/buddies?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <div className="space-y-10 max-w-4xl mx-auto text-center py-16 px-4">
        <section>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Welcome to <span className="text-secondary">MyGoBuddy</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your all-in-one smart assistant for managing tasks, connecting with services, and enhancing productivity.
          </p>
        </section>

        {/* 🔍 Search Bar + Button */}
        <div className="max-w-xl mx-auto">
          <SearchBar
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a buddy..."
          />
          <button
            onClick={handleSearch}
            className="mt-4 inline-block bg-secondary text-white px-6 py-2 rounded-md text-base font-medium hover:bg-primary transition duration-300"
          >
            Search Buddies
          </button>
        </div>

        <section className="space-y-5">
          <p className="text-base md:text-lg text-gray-600">
            MyGoBuddy is your personal AI assistant, designed to help you with a wide range of tasks and provide information on various topics. Whether you need help with scheduling, reminders, or just want to chat, MyGoBuddy is here for you.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Explore the features and let MyGoBuddy assist you in your daily life!
          </p>

          <Link
            to="/services"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-md text-base font-medium hover:bg-primary transition duration-300"
          >
            Get Started
          </Link>
        </section>
      </div>

      {/* Optionally feature top buddies here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 py-8">
      </div>
    </>
  );
}

export default Home;
