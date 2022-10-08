// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc,  addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "despensa-punto-sur.firebaseapp.com",
  projectId: "despensa-punto-sur",
  storageBucket: "despensa-punto-sur.appspot.com",
  messagingSenderId: "130035083428",
  appId: "1:130035083428:web:2373d5f5dcc0979399de31",
  measurementId: "G-9TQG65JWSF"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const verProducto = (id) => {
  getDoc(doc(db, "Productos", id))
}
const verProductos = (id) => {
  getDocs(doc(db, "Productos", id))
}
export default (db);