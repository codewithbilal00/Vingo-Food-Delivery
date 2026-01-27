// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vingo-food-delivery-2e291.firebaseapp.com",
  projectId: "vingo-food-delivery-2e291",
  storageBucket: "vingo-food-delivery-2e291.firebasestorage.app",
  messagingSenderId: "874977933052",
  appId: "1:874977933052:web:1642e9f9ee6e0dd24a0979",
  measurementId: "G-16NEDNY1BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
