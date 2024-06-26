// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDtiSrYkHqNEUef72ugh-YtoGMAADZ9jyE",
  authDomain: "mediumblog-3433d.firebaseapp.com",
  projectId: "mediumblog-3433d",
  storageBucket: "mediumblog-3433d.appspot.com",
  messagingSenderId: "1034976122682",
  appId: "1:1034976122682:web:3e6ec13dbdecdfb3c16203",
  measurementId: "G-YJCVFE4QLP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
