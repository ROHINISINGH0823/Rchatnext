// client/pages/friends.tsx
"use client";
import { useEffect, useState } from "react";
import {
  sendFriendRequest,
  getPendingRequests,
  acceptFriendRequest,
  getFriendsList,
} from "../lib/api";

export default function FriendsPage() {
  const [uid, setUid] = useState("");
  const [targetUid, setTargetUid] = useState("");
  const [pending, setPending] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const storedUid = localStorage.getItem("uid");
    if (storedUid) {
      setUid(storedUid);
      loadRequests(storedUid);
      loadFriends(storedUid);
    }
  }, []);

  const loadRequests = async (uid: string) => {
    const res = await getPendingRequests(uid);
    setPending(res);
  };

  const loadFriends = async (uid: string) => {
    const res = await getFriendsList(uid);
    setFriends(res);
  };

  const handleSend = async () => {
    if (!targetUid || targetUid === uid) return;
    await sendFriendRequest(uid, targetUid);
    alert("Request Sent");
    setTargetUid("");
  };

  const handleAccept = async (from: string) => {
    await acceptFriendRequest(from, uid);
    loadRequests(uid);
    loadFriends(uid);
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">👥 Friends Page</h2>

      {/* Send Request */}
      <div>
        <input
          value={targetUid}
          onChange={(e) => setTargetUid(e.target.value)}
          placeholder="Enter UID to add"
          className="border px-2 py-1 mr-2"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Send Request
        </button>
      </div>

      {/* Pending */}
      <div>
        <h3 className="font-semibold">📨 Pending Requests</h3>
        {pending.length === 0 ? (
          <p>No pending requests</p>
        ) : (
          pending.map((req: any) => (
            <div key={req._id} className="flex items-center gap-4 my-1">
              <span>From: {req.from}</span>
              <button
                onClick={() => handleAccept(req.from)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Accept
              </button>
            </div>
          ))
        )}
      </div>

      {/* Friends */}
      <div>
        <h3 className="font-semibold">✅ Friends</h3>
        {friends.length === 0 ? (
          <p>No friends yet</p>
        ) : (
          friends.map((f: any) => (
            <div
              key={f.uid}
              className="p-2 border rounded mb-2 cursor-pointer"
              onClick={() =>
                (window.location.href = `/chat/${f.uid}`)
              }
            >
              {f.name} ({f.uid})
            </div>
          ))
        )}
      </div>
    </div>
  );
}
