// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "despensa-punto-sur.firebaseapp.com",
  projectId: "despensa-punto-sur",
  storageBucket: "despensa-punto-sur.appspot.com",
  messagingSenderId: "130035083428",
  appId: "1:130035083428:web:2373d5f5dcc0979399de31",
  measurementId: "G-9TQG65JWSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db