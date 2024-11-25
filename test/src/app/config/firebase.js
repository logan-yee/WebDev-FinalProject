import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOwpsvC9TjUyd2b10rAbZlA9cOh4TRBAk",
  authDomain: "naan-stop-wok-a9fbd.firebaseapp.com",
  projectId: "naan-stop-wok-a9fbd",
  storageBucket: "naan-stop-wok-a9fbd.firebasestorage.app",
  messagingSenderId: "976206608524",
  appId: "1:976206608524:web:5eeb13a518d935557023a9",
  measurementId: "G-44N5CHSFX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);