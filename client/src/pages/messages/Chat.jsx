import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Chat() {
  const { id } = useParams();
  const [messages, setMessages] = useState([
    { from: "me", text: "Hi there!" },
    { from: "them", text: "Hello! Ready to get started?" },
  ]);
  const [newMsg, setNewMsg] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (newMsg.trim()) {
      setMessages((prev) => [...prev, { from: "me", text: newMsg }]);
      setNewMsg("");
    }
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col h-[80vh]">
      <h1 className="text-2xl font-bold text-primary mb-4">Chat with {id}</h1>

      {/* Messages container */}
      <div className="flex-1 overflow-y-auto space-y-2 p-4 bg-neutral rounded-md">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[75%] px-4 py-2 rounded-lg shadow-sm text-sm ${
              msg.from === "me"
                ? "ml-auto bg-secondary text-white"
                : "mr-auto bg-light text-dark"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary/30"
        />
        <button
          onClick={sendMessage}
          className="bg-secondary hover:bg-primary transition-colors text-white px-6 py-2 rounded-xl font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
