import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBTWQEaeO1ddZ3j6H0AbIZS4BRHL2I0c58",
  authDomain: "tiktok---jornada-4e2ce.firebaseapp.com",
  projectId: "tiktok---jornada-4e2ce",
  storageBucket: "tiktok---jornada-4e2ce.appspot.com",
  messagingSenderId: "483428517959",
  appId: "1:483428517959:web:49dd78730137bfb419c962",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;