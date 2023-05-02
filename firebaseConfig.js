import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_KhcKQF2OoEUoIZ6Ecf6Xkvwsx-JFVPA",
  authDomain: "super-ahorro-b7a14.firebaseapp.com",
  projectId: "super-ahorro-b7a14",
  storageBucket: "super-ahorro-b7a14.appspot.com",
  messagingSenderId: "694378064633",
  appId: "1:694378064633:web:c661d7984073b6c82b1028",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
