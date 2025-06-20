import React from "react";
import { useNavigate } from "react-router-dom";

function BuddyCard({ id, avatar, name, status = "Online", title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/buddies/${id}`);
  };

  const statusColors = {
    Online: "bg-green-500",
    Away: "bg-yellow-500",
    Offline: "bg-gray-400",
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer w-full max-w-sm"
    >
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border border-gray-200"
        />
        <span
          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${statusColors[status] || "bg-gray-300"}`}
          title={status}
        ></span>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
}

export default BuddyCard;
// BuddyCard.jsx