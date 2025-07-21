import Sidebar from "../../components/Sidebar";
import ChatBox from "../../components/ChatBox";

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatBox />
    </div>
  );
}