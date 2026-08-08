import { db } from '../firebase-config.js';
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export const fetchStudentResult = async (rollNumber) => {
    const q = query(collection(db, "Results"), where("rollNo", "==", rollNumber));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    } else {
        throw new Error("Result not found for this Roll Number.");
    }
};
