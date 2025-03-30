// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqNWIR1k7m25_QnE3RqTwU1oC3OVFtblo",
  authDomain: "langdp-database.firebaseapp.com",
  projectId: "langdp-database",
  storageBucket: "langdp-database.firebasestorage.app",
  messagingSenderId: "563908328170",
  appId: "1:563908328170:web:9f321efa914e7695aa3593",
  measurementId: "G-E166PSLX15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);