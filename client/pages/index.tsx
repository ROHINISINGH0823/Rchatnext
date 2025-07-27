import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ChatWindow from "../components/Chat/ChatWindow";
import Sidebar from "../components/Chat/Sidebar";
import StoriesPanel from "../components/Chat/StoriesPanel";

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
  const token = localStorage.getItem("chat_token");
  if (!token) {
    router.push("/login");
  } else {
    setUser(token); // just save the token string
  }
}, []);


  if (!user) return <div className="text-center p-4">Loading...</div>;

  return (
    <>
      <Head>
        <title>ChatNext Clone</title>
      </Head>
      <div className="flex h-screen bg-gradient-to-br from-[#C6E2E9] via-[#FCD5CE] to-[#FFF1E6] p-4 gap-4">
        <Sidebar />
        <ChatWindow />
        <StoriesPanel />
      </div>
    </>
  );
}
