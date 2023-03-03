import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYIRpRBJ1M9Bhsdu730661bDdheg-6TNY",
  authDomain: "linkedin-b8f3c.firebaseapp.com",
  projectId: "linkedin-b8f3c",
  storageBucket: "linkedin-b8f3c.appspot.com",
  messagingSenderId: "72728252398",
  appId: "1:72728252398:web:dd7f87a0a99f2bfd7c48ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
