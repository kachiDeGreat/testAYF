// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Replace with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyA61cVfTY2TI4p8Q9GJQocIBLdgLXntBdQ",
  authDomain: "ayfcalabar-website.firebaseapp.com",
  projectId: "ayfcalabar-website",
  storageBucket: "ayfcalabar-website.firebasestorage.app",
  messagingSenderId: "384742314693",
  appId: "1:384742314693:web:3e3708f9b0e2e0998316ac",
  measurementId: "G-QP6S9NENZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
