import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function BuddyCard({ id, avatar, name, title, status }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = (e) => {
    e.stopPropagation(); // prevent card click
    setIsFavorite((prev) => !prev);
  };

  const handleClick = () => {
    navigate(`/buddies/${id}`);
  };

  return (
    <div
      className="relative flex items-center gap-4 p-4 border border-gray-200 rounded-lg max-w-xs cursor-pointer hover:shadow transition"
      onClick={handleClick}
    >
      {/* Favorite Icon */}
      <button
        className="absolute top-2 right-2 text-xl text-red-500 hover:scale-110 transition"
        onClick={toggleFavorite}
        aria-label="Toggle Favorite"
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />

      <div>
        <h3 className="text-lg font-semibold m-0">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-green-600 text-sm m-0">{status}</p>
      </div>
    </div>
  );
}

export default BuddyCard;
