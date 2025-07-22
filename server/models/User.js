// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: String, // from Google
  name: String,
  email: String,
  friends: [String], // list of user UIDs (accepted friends)
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
