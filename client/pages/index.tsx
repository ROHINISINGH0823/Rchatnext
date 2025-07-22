import { useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../lib/firebase";
import ChatBox from "../components/Chat/ChatBox";

export default function App() {
  const [user, setUser] = useState<null | { displayName: string | null }>(null);

  // Listen for auth state changes (auto-login on page refresh)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error("Google Sign-in failed:", err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (!user) {
    return (
      <div className="p-4">
        <button
          onClick={handleGoogleLogin}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <span>Welcome, {user.displayName || "User"}!</span>
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>

      <div className="flex-grow">
        <ChatBox googleName={user.displayName || "Anonymous"} />
      </div>
    </div>
  );
}
