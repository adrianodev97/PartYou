import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged   } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPSA1M2zVARBcIjLxlKVSVRzlpvxPayo4",
  authDomain: "partyou-ae814.firebaseapp.com",
  projectId: "partyou-ae814",
  storageBucket: "partyou-ae814.appspot.com",
  messagingSenderId: "499481635745",
  appId: "1:499481635745:web:988db3c16e5b1e42b239e0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

const signUp = (email, password) => { return createUserWithEmailAndPassword(auth, email, password)}
const signIn = (email, password) => { return signInWithEmailAndPassword(auth, email, password)}
const onAuth = () => { return new Promise((resolve, reject ) => {onAuthStateChanged(auth, user => {resolve(user)})})}
const logOut = () => { return signOut(auth)}


export const fb = {
  auth: {
    new: signUp,
    in:signIn,
    on:onAuth,
    out:logOut
  }
}