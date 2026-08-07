// init-firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgVFdfKpCrLkoRsMI2gS7ajlJUzVdYLZU",
  authDomain: "pry-school-pethgam-wagoora.firebaseapp.com",
  projectId: "pry-school-pethgam-wagoora",
  storageBucket: "pry-school-pethgam-wagoora.firebasestorage.app",
  messagingSenderId: "255417366612",
  appId: "1:255417366612:web:81cec46aa75cb7d4ba95c1",
  measurementId: "G-JE9WY9T6FJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
