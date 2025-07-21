import { auth, provider } from "../lib/firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const login = async () => {
    await signInWithPopup(auth, provider);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
       
        router.push(`/chat/${user.uid}`);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <button onClick={login} className="bg-green-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
}
