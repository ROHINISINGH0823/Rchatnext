import { useEffect, useState } from "react";
import socket from "../../utils/socket";

type ChatBoxProps = {
  googleName?: string;
  friendUid?: string; 
};

export default function ChatBox({ googleName, friendUid }: ChatBoxProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [myUid, setMyUid] = useState("");
  const [username, setUsername] = useState("");

  const [roomId, setRoomId] = useState("global-room");

  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("send-message", {
      roomId,
      message,
      sender: username,
    });

    setMessages((prev) => [...prev, `🟢 You: ${message}`]);
    setMessage("");
  };

  useEffect(() => {
    let name = googleName || localStorage.getItem("username");
    const uid = localStorage.getItem("uid"); // 👈 Must store uid on login

    if (!name) {
      name = prompt("Enter your name")?.trim() || "Anonymous";
      localStorage.setItem("username", name);
    }

    setUsername(name || "Anonymous");
    setMyUid(uid || "");

    const rId = friendUid && uid ? [uid, friendUid].sort().join("-") : "global-room";
    setRoomId(rId);

    socket.emit("join-room", rId);

    socket.on("load-messages", (msgs) => {
      const formatted = msgs.map((m: any) =>
        m.sender === name
          ? `🟢 You: ${m.message}`
          : `🔵 ${m.sender}: ${m.message}`
      );
      setMessages(formatted);
    });

    socket.on("receive-message", (msg) => {
      setMessages((prev) => [
        ...prev,
        msg.sender === name
          ? `🟢 You: ${msg.message}`
          : `🔵 ${msg.sender || "Friend"}: ${msg.message}`,
      ]);
    });

    return () => {
      socket.off("receive-message");
      socket.off("load-messages");
    };
  }, [googleName, friendUid]);

  return (
    <div className="p-4 flex flex-col h-full w-full">
      <div className="mb-2 text-sm text-gray-600">
        Room: <b>{roomId}</b> | You: <b>{username}</b>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-100 p-2 rounded">
        {messages.map((msg, i) => (
          <p key={i} className="mb-2">
            {msg}
          </p>
        ))}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border rounded-l px-2 py-1"
          placeholder="Type a message"
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 text-white px-4 py-1 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
