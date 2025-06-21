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
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-16 bg-white font-poppins">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-montserrat">
            Welcome to <span className="text-secondary">MyGoBuddy</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your all-in-one smart assistant for managing tasks, connecting with services, and enhancing productivity.
          </p>
        </section>

        {/* Search */}
        <div className="max-w-xl mx-auto text-center">
          <SearchBar
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a buddy..."
          />
          <button
            onClick={handleSearch}
            className="mt-4 bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary transition-all duration-300"
          >
            Search Buddies
          </button>
        </div>

        {/* Intro Copy */}
        <section className="space-y-4 text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-700">
            MyGoBuddy is your personal AI assistant, designed to help you with a wide range of tasks and provide information on various topics.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            Whether you need help with scheduling, reminders, or just want to chat, MyGoBuddy is here for you.
          </p>

          <Link
            to="/services"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-primary transition duration-300"
          >
            Get Started
          </Link>
        </section>
      </div>

      {/* Buddy Cards (optional feature section) */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center font-montserrat">
          Featured Buddies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add <Buddy /> cards here */}
        </div>
      </div>
    </>
  );
}

export default Home;
