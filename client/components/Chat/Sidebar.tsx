"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Sidebar() {
  const [friends, setFriends] = useState<{ uid: string; name: string }[]>([]);
  const router = useRouter();
  const myUid = typeof window !== "undefined" ? localStorage.getItem("uid") : null;

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        if (!myUid) return;

        const res = await axios.get(`http://localhost:5000/api/friends/friends/${myUid}`);
        setFriends(res.data);
      } catch (err) {
        console.error("❌ Failed to load friends", err);
      }
    };

    fetchFriends();
  }, [myUid]);

  const goToChat = (friendUid: string) => {
    router.push(`/chat/${friendUid}`);
  };

  return (
    <div className="w-1/3 max-w-xs bg-gray-100 p-4 border-r overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">👥 Friends</h2>

      {friends.length === 0 && <p className="text-sm text-gray-500">No friends yet.</p>}

      {friends.map((friend) => (
        <div
          key={friend.uid}
          onClick={() => goToChat(friend.uid)}
          className="p-2 mb-2 bg-white rounded shadow hover:bg-blue-100 cursor-pointer"
        >
          {friend.name}
        </div>
      ))}
    </div>
  );
}
