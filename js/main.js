// Pry.-school-pethgam-wagoora / js / main.js

// Import the specific services you need from your init file
// Note: The path depends on where main.js is relative to init-firebase.js
import { auth, db } from './init-firebase.js';

// Example import from the Firebase SDK (not your file) to use functionality
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

// --- Example Usage ---

// 1. Example Authentication (Log in)
async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in:", userCredential.user.uid);
  } catch (error) {
    console.error("Login error:", error.message);
  }
}

// 2. Example Firestore (Add data)
async function saveStudent(studentName) {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      name: studentName,
      timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
