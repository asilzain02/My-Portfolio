// Import the functions you need from the SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRBOsKMxbCdYIGTphqiEAMcVD-jBxplS8",
  authDomain: "email-from-portfolio-b02df.firebaseapp.com",
  projectId: "email-from-portfolio-b02df",
  storageBucket: "email-from-portfolio-b02df.firebasestorage.app",
  messagingSenderId: "109287702073",
  appId: "1:109287702073:web:9d816ecbdc0f6e5c7057e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
