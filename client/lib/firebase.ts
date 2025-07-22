import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpzfDTaYGNdQ0gScuZGXgYr9gY7xrhSyo",
  authDomain: "chatnext-clone.firebaseapp.com",
  projectId: "chatnext-clone",
  storageBucket: "chatnext-clone.appspot.com",
  messagingSenderId: "1097303566373",
  appId: "1:1097303566373:web:ae9f36b6362372e62237cc",
  measurementId: "G-TSF7N23Z7P"
};

// ✅ Safe initialization
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
