import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1gaFf9UERH0omOvumJkflguGVJ79OB3o",
  authDomain: "vue-firebase-1bc25.firebaseapp.com",
  projectId: "vue-firebase-1bc25",
  storageBucket: "vue-firebase-1bc25.appspot.com",
  messagingSenderId: "598169153021",
  appId: "1:598169153021:web:232cb6c3e52a32d3207d94",
  measurementId: "G-L25FJN57J8",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
