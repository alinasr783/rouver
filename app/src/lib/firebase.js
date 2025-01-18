// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC3Vifk2BqueUVYFOuNdtC3nuyBIhTg_4",
  authDomain: "rouver2.firebaseapp.com",
  projectId: "rouver2",
  storageBucket: "rouver2.firebasestorage.app",
  messagingSenderId: "2754655045",
  appId: "1:2754655045:web:e44523b9dd34b45284442c",
  measurementId: "G-7H782J65TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase App Initialized:", app);

// Optional: Initialize Analytics if needed
const analytics = getAnalytics(app);

export { app, analytics };