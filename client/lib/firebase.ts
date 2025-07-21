import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpzfDTaYGNdQ0gScuZGXgYr9gY7xrhSyo",
  authDomain: "chatnext-clone.firebaseapp.com",
  projectId: "chatnext-clone",
  storageBucket: "chatnext-clone.firebasestorage.app",
  messagingSenderId: "1097303566373",
  appId: "1:1097303566373:web:ae9f36b6362372e62237cc",
  measurementId: "G-TSF7N23Z7P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();