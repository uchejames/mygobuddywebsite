import { Link, useLocation } from "react-router-dom";

function Messages() {
  // Mock data - Replace with real API later
  const conversations = [
    { id: "1", name: "Buddy Alex", lastMessage: "Looking forward to our session." },
    { id: "2", name: "Client Jane", lastMessage: "Can we reschedule?" },
  ];

  // Optional: Handle path awareness
  const location = useLocation();
  const isBuddy = location.pathname.includes("/buddy-dashboard");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-primary mb-6">Messages</h1>

      <div className="space-y-4">
        {conversations.map((chat) => (
          <Link
            to={`${chat.id}`} // ← relative path!
            key={chat.id}
            className="block p-4 rounded-lg border border-neutral hover:bg-light transition"
          >
            <h2 className="text-lg font-semibold text-dark">{chat.name}</h2>
            <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Messages;
