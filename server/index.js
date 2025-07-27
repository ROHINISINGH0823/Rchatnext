import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import friendRoutes from "./routes/privateRoutes.js";
import { setupSocket } from "./sockets/chatSocket.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

console.log("JWT_SECRET:", process.env.JWT_SECRET);

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

connectDB();

app.use("/api/friends", friendRoutes);
app.use("/api/auth", authRoutes);

setupSocket(io);

app.get("/", (req, res) => {
  res.send("Server running ✅");
});

server.listen(5000, () => {
  console.log("🚀 Backend listening on http://localhost:5000");
});
