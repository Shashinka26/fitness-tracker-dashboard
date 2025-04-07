// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0hJrWyy6MgqCnnVCT6xnfn0Kno0z-2Kc",
  authDomain: "fitness-tracker-dashboar-b08d3.firebaseapp.com",
  projectId: "fitness-tracker-dashboar-b08d3",
  storageBucket: "fitness-tracker-dashboar-b08d3.firebasestorage.app",
  messagingSenderId: "415798224503",
  appId: "1:415798224503:web:fa1a213266c270af64c872"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
