
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZin81mGippTz8TtJJ6IMEeE2fXiQ8vRk",
  authDomain: "comercio10101985.firebaseapp.com",
  projectId: "comercio10101985",
  storageBucket: "comercio10101985.appspot.com",
  messagingSenderId: "480244879982",
  appId: "1:480244879982:web:37fb20d8de1cceb7bacc7f",
  measurementId: "G-CEMQ195ZLB"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);