// utils/jwt.js
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export const generateToken = (user) => {
  return jwt.sign(
    {
      uid: user.uid,
      email: user.email,
      name: user.name,
    },
    JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
