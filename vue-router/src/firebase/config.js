import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1gaFf9UERH0omOvumJkflguGVJ79OB3o",
  authDomain: "vue-firebase-1bc25.firebaseapp.com",
  projectId: "vue-firebase-1bc25",
  storageBucket: "vue-firebase-1bc25.appspot.com",
  messagingSenderId: "598169153021",
  appId: "1:598169153021:web:232cb6c3e52a32d3207d94",
  measurementId: "G-L25FJN57J8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);
const citiesColRef = collection(db, "cities");

export { auth, getDocs, addDoc, setDoc };
export default citiesColRef;
