import Sidebar from "../../components/Chat/Sidebar";
import ChatBox from "../../components/Chat/ChatBox";

export default function PrivateChatPage({ params }: { params: { uid: string } }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatBox friendUid={params.uid} />
    </div>
  );
}
