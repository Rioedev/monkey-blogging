import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtSKrnLdd99hApB3kDGDI6cGT1sZ-lzFo",
  authDomain: "monkey-blogging-57f02.firebaseapp.com",
  projectId: "monkey-blogging-57f02",
  storageBucket: "monkey-blogging-57f02.appspot.com",
  messagingSenderId: "877269608457",
  appId: "1:877269608457:web:b82ae929e2f2cc8682b0d8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth = getAuth(app);
