// client/lib/api.ts
const BASE_URL = "http://localhost:5000/api/friends";

export const sendFriendRequest = async (from: string, to: string) => {
  const res = await fetch(`${BASE_URL}/send-request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from, to }),
  });
  return res.json();
};

export const acceptFriendRequest = async (from: string, to: string) => {
  const res = await fetch(`${BASE_URL}/accept-request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from, to }),
  });
  return res.json();
};

export const getPendingRequests = async (uid: string) => {
  const res = await fetch(`${BASE_URL}/requests/${uid}`);
  return res.json();
};

export const getFriendsList = async (uid: string) => {
  const res = await fetch(`${BASE_URL}/friends/${uid}`);
  return res.json();
};
