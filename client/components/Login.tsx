// components/Login.tsx
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase";


export default function Login() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Logged in as:", user.displayName);

      // Store in localStorage (or you can use Zustand, Redux, etc.)
      localStorage.setItem("username", user.displayName || "Anonymous");

      // Redirect or refresh chat page if needed
    } catch (err) {
      console.error("❌ Google Sign-in failed:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
