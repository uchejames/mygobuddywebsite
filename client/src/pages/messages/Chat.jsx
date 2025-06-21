import { useParams } from "react-router-dom";
import { useState } from "react";

function Chat() {
  const { id } = useParams();
  const [messages, setMessages] = useState([
    { from: "me", text: "Hi there!" },
    { from: "them", text: "Hello! Ready to get started?" },
  ]);
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    if (newMsg.trim()) {
      setMessages([...messages, { from: "me", text: newMsg }]);
      setNewMsg("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col h-[80vh]">
      <h1 className="text-xl font-semibold text-primary mb-4">Chat with {id}</h1>

      <div className="flex-1 space-y-2 overflow-y-auto bg-white rounded p-4 shadow mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded max-w-xs ${
              msg.from === "me" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
// This component handles the chat interface for a specific conversation.