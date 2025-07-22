import User from "../models/User.js";

export const upsertUser = async (req, res) => {
  const { uid, name, email } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { uid },
      { name, email },
      { upsert: true, new: true }
    );
    res.json(user);
  } catch (err) {
    console.error("❌ Upsert user failed:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
