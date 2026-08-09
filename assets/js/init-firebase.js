// assets/js/init-firebase.js

import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { getStorage } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

import { getAuth } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {

  apiKey: "AIzaSyDgVFdfKpCrLkoRsMI2gS7ajlJUzVdYLZU",

  authDomain:
    "pry-school-pethgam-wagoora.firebaseapp.com",

  projectId:
    "pry-school-pethgam-wagoora",

  storageBucket:
    "pry-school-pethgam-wagoora.firebasestorage.app",

  messagingSenderId:
    "255417366612",

  appId:
    "1:255417366612:web:81cec46aa75cb7d4ba95c1",

  measurementId:
    "G-JE9WY9T6FJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase services
const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app);


// Export services
export {
  app,
  db,
  storage,
  auth
};
