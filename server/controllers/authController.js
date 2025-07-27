import { loginOrRegisterUser } from "../services/authService.js";

export const handleGoogleLogin = async (req, res) => {
  try {
    const { token } = req.body;
    const { user, jwtToken } = await loginOrRegisterUser(token);

    res.status(200).json({ message: "Login success", user, token: jwtToken });
  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};
