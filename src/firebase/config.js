// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp496PadWn1D9JHhVaVc4liXd82f_AW8I",
  authDomain: "maltimart-e1219.firebaseapp.com",
  projectId: "maltimart-e1219",
  storageBucket: "maltimart-e1219.appspot.com",
  messagingSenderId: "946097883349",
  appId: "1:946097883349:web:efc73a9f9db58e8dcf3a5c",
  measurementId: "G-3H3ZYE5V62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);
