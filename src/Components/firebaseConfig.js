// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwdYzbptH6KwHcOaHGwKdaBstxChLaNz4",
  authDomain: "ocms-6e492.firebaseapp.com",
  projectId: "ocms-6e492",
  storageBucket: "ocms-6e492.appspot.com",
  messagingSenderId: "848601561303",
  appId: "1:848601561303:web:someappidhere", // Update with your actual App ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };  // Export auth for use in your app
