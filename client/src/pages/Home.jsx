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
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-20 bg-white font-poppins">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-montserrat leading-tight">
            Welcome to <span className="text-button">MyGoBuddy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Your all-in-one smart assistant for managing tasks, connecting with services, and enhancing productivity.
          </p>
        </section>

        {/* Search Section */}
        <div className="max-w-5xl mx-auto">
          <SearchBar
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where do you need help?"
            onSearch={handleSearch}
          />
        </div>

        {/* About/Intro Section */}
        <section className="space-y-5 text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-700">
            MyGoBuddy is your personal AI assistant, designed to assist with a wide range of tasks — from scheduling and reminders to connecting with services and answering questions.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            Whether you're organizing your day or just need a hand, MyGoBuddy is here to make your life easier.
          </p>
          <Link
            to="/services"
            className="inline-block bg-button text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-primary transition duration-300"
          >
            Get Started
          </Link>
        </section>
      </div>

      {/* Featured Buddies */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary font-montserrat text-center mb-10">
          Featured Buddies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render dynamic <Buddy /> cards here */}
        </div>
      </div>
    </>
  );
}

export default Home;
