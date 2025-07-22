import FriendRequest from "../models/FriendRequest.js";
import User from "../models/User.js";


export const sendRequest = async (req, res) => {
  const { from, to } = req.body;

  if (from === to) return res.status(400).json({ error: "Cannot send request to yourself" });

  const existing = await FriendRequest.findOne({ from, to });
  if (existing) return res.status(400).json({ error: "Request already sent" });

  await FriendRequest.create({ from, to });
  res.json({ success: true, message: "Request sent" });
};



export const acceptRequest = async (req, res) => {
  const { from, to } = req.body;

  const request = await FriendRequest.findOne({ from, to, status: "pending" });
  if (!request) return res.status(404).json({ error: "No pending request" });

  request.status = "accepted";
  await request.save();

  await User.updateOne({ uid: from }, { $addToSet: { friends: to } });
  await User.updateOne({ uid: to }, { $addToSet: { friends: from } });

  res.json({ success: true, message: "Friend request accepted" });
};



export const getPendingRequests = async (req, res) => {
  const { uid } = req.params;
  const requests = await FriendRequest.find({ to: uid, status: "pending" });
  res.json(requests);
};



export const getFriendsList = async (req, res) => {
  const { uid } = req.params;
  const user = await User.findOne({ uid });
  if (!user) return res.status(404).json({ error: "User not found" });

  const friends = await User.find({ uid: { $in: user.friends } }, "uid name");
  res.json(friends);
};
