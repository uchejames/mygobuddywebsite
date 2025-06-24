import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook
import {
  Heart,
  MapPin,
  Globe,
  Star,
  Clock,
  Zap,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

function BuddyCard({
  id,
  avatar,
  name,
  title,
  isOnline = true,
  location = "Lagos, Nigeria",
  languages = ["English", "Yoruba"],
  rating = 4.9,
  experience = "3 years",
  responseRate = "98%",
  verified = true,
  reviewCount = 127,
  hourlyRate = "$25",
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate(); // ✅ Hook

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite((prev) => !prev);
  };

  const handleClick = () => {
    console.log(`Navigate to buddy ${id}`);
    // Optional: navigate(`/buddies/${id}`);
  };

  const handleContact = (e) => {
    e.stopPropagation();
    console.log(`Contact buddy ${id}`);
  };

  const goToProfile = (e) => {
    e.stopPropagation(); // Prevent triggering card click
    navigate(`/buddies/${id}`); // ✅ Go to profile
  };

  return (
    <div className="group relative">
      <div
        className="relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 cursor-pointer overflow-hidden max-w-sm"
        onClick={handleClick}
      >
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />

        {/* Favorite Button */}
        <button
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 z-10 ${
            isFavorite
              ? "bg-red-500 text-white shadow-lg scale-110"
              : "bg-white/80 text-gray-400 hover:bg-red-50 hover:text-red-500 hover:scale-105"
          }`}
          onClick={toggleFavorite}
          aria-label="Toggle Favorite"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>

        <div className="relative p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <img
                src={
                  avatar ||
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                }
                alt={name}
                className="w-16 h-16 rounded-2xl object-cover ring-3 ring-white shadow-md"
              />
              {isOnline && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white">
                  <div className="w-full h-full rounded-full bg-green-400 animate-pulse"></div>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-gray-900 truncate">
                  {name}
                </h3>
                {verified && (
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{title}</p>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    isOnline
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      isOnline ? "bg-green-500" : "bg-gray-400"
                    }`}
                  ></div>
                  {isOnline ? "Available" : "Offline"}
                </span>
                <span className="text-lg font-bold text-gray-900">
                  {hourlyRate}/session
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-gray-900">
                    {rating}
                  </span>
                  <span className="text-xs text-gray-500">({reviewCount})</span>
                </div>
                <span className="text-xs text-gray-500">Rating</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-50 rounded-lg">
                <Zap className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-900">
                  {responseRate}
                </span>
                <div className="text-xs text-gray-500">Response</div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Globe className="w-4 h-4 text-gray-400" />
              <div className="flex gap-1 flex-wrap">
                {languages?.slice(0, 2).map((lang, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium"
                  >
                    {lang}
                  </span>
                ))}
                {languages?.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                    +{languages.length - 2}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{experience} experience</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleContact}
              className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Contact
            </button>
            <button
              onClick={goToProfile} // ✅ Attach navigation
              className="px-4 py-3 border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 rounded-xl transition-colors font-medium"
            >
              View Profile
            </button>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
      </div>
    </div>
  );
}

export default BuddyCard;
