// models/FriendRequest.js
import mongoose from "mongoose";

const FriendRequestSchema = new mongoose.Schema({
  from: String, // sender UID
  to: String,   // receiver UID
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("FriendRequest", FriendRequestSchema);
