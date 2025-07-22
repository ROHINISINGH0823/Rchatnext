// index.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import connectDB from "./db.js";
import friendRoutes from "./routes/privateRoutes.js";
import { setupSocket } from "./sockets/chatSocket.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
connectDB();

// Routes
app.use("/api/friends", friendRoutes);

// Socket Setup
setupSocket(io);

// Health check or basic fallback
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

server.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
