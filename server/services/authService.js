import { adminAuth } from "../firebaseAdmin.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const loginOrRegisterUser = async (firebaseToken) => {
  const decoded = await adminAuth.verifyIdToken(firebaseToken);

  let user = await User.findOne({ uid: decoded.uid });
  if (!user) {
    user = await User.create({
      uid: decoded.uid,
      name: decoded.name,
      email: decoded.email,
      photo: decoded.picture,
    });
  }

  const jwtToken = jwt.sign({ uid: user.uid }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return { user, jwtToken };
};
