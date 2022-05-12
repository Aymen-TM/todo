// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSlzQs6JT6ehRZw9p5mFy0oixoScIjEvM",
  authDomain: "todoapp-78721.firebaseapp.com",
  projectId: "todoapp-78721",
  storageBucket: "todoapp-78721.appspot.com",
  messagingSenderId: "253891890527",
  appId: "1:253891890527:web:d3d4642839c69f046bfaea",
  measurementId: "G-7ZCGWDNYZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db,auth}
