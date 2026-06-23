import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
export const auth = getAuth(app);
export const db = getFirestore(app);
