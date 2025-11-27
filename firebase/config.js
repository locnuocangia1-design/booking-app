import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAM8bO2tfmzSC09nwKT53mMKodwt2LSJSo",
  authDomain: "angiaweb.firebaseapp.com",
  projectId: "angiaweb",
  storageBucket: "angiaweb.firebasestorage.app",
  messagingSenderId: "632156541294",
  appId: "1:632156541294:web:6187805a23e41d0adfb17f"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
