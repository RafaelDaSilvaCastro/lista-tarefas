
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAwLHr18mU1-zfNMyARyJYEfLsKJbivqGg",
  authDomain: "curso-4a81f.firebaseapp.com",
  projectId: "curso-4a81f",
  storageBucket: "curso-4a81f.appspot.com",
  messagingSenderId: "383042062161",
  appId: "1:383042062161:web:9441538703f92ca9d7f570",
  measurementId: "G-59VBFX0XDD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }