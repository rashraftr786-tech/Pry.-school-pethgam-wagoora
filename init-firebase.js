// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzxHme_3hrztrDuD7wupGwNilDtYLfENI",
  authDomain: "studio-2729610945-4684b.firebaseapp.com",
  projectId: "studio-2729610945-4684b",
  storageBucket: "studio-2729610945-4684b.firebasestorage.app",
  messagingSenderId: "711147405574",
  appId: "1:711147405574:web:7b5597955b676a3e4d1e87",
  measurementId: "G-26C560QG0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
