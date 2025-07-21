// Firebase v9+ modular SDK
// Replace the below config with your actual Firebase project config
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js"; // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyDdU55TPZVf-Ok-jgusZq_BBuVF1DDwP_k",
  authDomain: "obra-dbe16.firebaseapp.com",
  projectId: "obra-dbe16",
  storageBucket: "obra-dbe16.appspot.com",
  messagingSenderId: "273637438399",
  appId: "1:273637438399:web:f7e68f1bc1f6f474f7a70a",
  measurementId: "G-TZWQYWPJ7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Firestore initialized here

export { auth, db }; // ✅ Export both
