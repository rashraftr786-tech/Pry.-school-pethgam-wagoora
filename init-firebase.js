import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  // ... your existing config remains the same ...
  apiKey: "AIzaSyCzxHme_3hrztrDuD7wupGwNilDtYLfENI",
  authDomain: "studio-2729610945-4684b.firebaseapp.com",
  projectId: "studio-2729610945-4684b",
  storageBucket: "studio-2729610945-4684b.firebasestorage.app",
  messagingSenderId: "711147405574",
  appId: "1:711147405574:web:7b5597955b676a3e4d1e87"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
