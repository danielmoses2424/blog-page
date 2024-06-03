
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA56aqq78sJwT-e1MWPkBFAUIh6uL43bHk",
  authDomain: "blog-3eccc.firebaseapp.com",
  projectId: "blog-3eccc",
  storageBucket: "blog-3eccc.appspot.com",
  messagingSenderId: "228300423137",
  appId: "1:228300423137:web:65bee21a804d6954971ca0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();