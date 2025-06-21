import { Link } from "react-router-dom";

function Messages() {
  // Replace this with real API later
  const conversations = [
    { id: "1", name: "Buddy Alex", lastMessage: "Looking forward to our session." },
    { id: "2", name: "Client Jane", lastMessage: "Can we reschedule?" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-primary mb-6">Messages</h1>

      <div className="space-y-4">
        {conversations.map((chat) => (
          <Link
            to={`/messages/${chat.id}`}
            key={chat.id}
            className="block p-4 bg-white rounded shadow hover:bg-neutral transition"
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
// This component displays a list of message conversations.