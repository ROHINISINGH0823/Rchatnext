// sockets/chatSocket.js
import Message from "../models/Message.js";

export const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("🟢 User connected");

    socket.on("join-room", async (roomId) => {
      socket.join(roomId);
      const messages = await Message.find({ roomId }).sort({ createdAt: 1 });
      socket.emit("load-messages", messages);
    });

    socket.on("send-message", async (data) => {
      const { roomId, message, sender } = data;
      const newMsg = new Message({ roomId, message, sender });
      await newMsg.save();

      socket.to(roomId).emit("receive-message", data);
    });

    socket.on("disconnect", () => {
      console.log("🔴 User disconnected");
    });
  });
};
