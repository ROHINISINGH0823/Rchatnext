// pages/Login.tsx
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      // Backend call to get custom JWT
      const res = await axios.post("http://localhost:5000/api/auth/google", {
        token,
      });

   
      const jwt = res.data.token;

      
      localStorage.setItem("chat_token", jwt);

      router.push("/");
    } catch (err) {
      console.error("❌ Login failed:", err);
      alert("Login failed. Try again.");
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("chat_token");
    if (user) router.push("/"); // Already logged in
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#C6E2E9] via-[#FCD5CE] to-[#FFF1E6]">
      <h1 className="text-4xl font-bold mb-6">Welcome to ChatNext</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg shadow-md transition-all duration-300"
      >
        Sign in with Google
      </button>
    </div>
  );
}
