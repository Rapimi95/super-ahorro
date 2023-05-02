import { auth, db } from "@/firebaseConfig";
import { setIsSignedIn } from "@/slices/authSlice";
import { setProducts } from "@/slices/productsSlice";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Main({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, "products");
      const querySnapshot = await getDocs(collectionRef);
      const arr = [];

      querySnapshot.forEach((doc) => {
        console.log(arr.push({ id: doc.id, ...doc.data() }));
      });

      dispatch(setProducts(arr));
    })();
  }, [dispatch]);

  useEffect(() => {
    if (!auth) return;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setIsSignedIn(true));
      } else {
        dispatch(setIsSignedIn(false));
      }
    });
  }, [dispatch]);

  return <div>{children}</div>;
}

export default Main;
