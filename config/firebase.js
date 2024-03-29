// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, ref,set,onValue} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtrDeIXUeBk2hlK5Li30wQdgyoErCwRSU",
  authDomain: "confess-note-b8925.firebaseapp.com",
  databaseURL: "https://confess-note-b8925-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confess-note-b8925",
  storageBucket: "confess-note-b8925.appspot.com",
  messagingSenderId: "749374430273",
  appId: "1:749374430273:web:e7963b1fae3f22ed7d7ac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database,ref,set,onValue}