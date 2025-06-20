import { useParams } from "react-router-dom";
import buddies from "../data/buddies";

function BuddyDetail() {
  const { id } = useParams();
  const buddy = buddies.find((b) => b.id === parseInt(id));

  if (!buddy) {
    return <div className="text-center py-10 text-gray-500">Buddy not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <img
        src={buddy.avatar}
        alt={buddy.name}
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h1 className="text-3xl font-bold text-primary">{buddy.name}</h1>
      <p className="text-lg text-gray-600 mb-4">{buddy.title}</p>
      <span
        className={`inline-block px-3 py-1 text-sm rounded-full text-white ${
          buddy.status === "Online"
            ? "bg-green-500"
            : buddy.status === "Away"
            ? "bg-yellow-500"
            : "bg-gray-400"
        }`}
      >
        {buddy.status}
      </span>

      <p className="mt-6 text-gray-700 max-w-xl mx-auto">
        {buddy.name} is a trusted {buddy.title.toLowerCase()} here to assist you with personalized support, tips, and tools to make your experience smooth and productive.
      </p>
    </div>
  );
}

export default BuddyDetail;
