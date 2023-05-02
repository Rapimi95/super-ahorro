import { db } from "@/firebaseConfig";
import { setCart } from "@/slices/productsSlice";
import { currency } from "@/utils";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetail() {
  const [item, setItem] = useState(undefined);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  function addToCart() {
    if (!cart.find((i) => i.id === item.id)) {
      dispatch(setCart([...cart, item]));
    }
  }

  useEffect(() => {
    if (!id) return;

    (async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    })();
  }, [id]);

  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <div className="p-6 flex justify-center items-center" style={{ height: "calc(100vh - (68px + 72px))" }}>
          {item && (
            <div className="shadow-lg rounded-3xl w-4/5 overflow-hidden flex relative">
              {item?.offer && (
                <div className="bg-blue-200 px-6 py-2 rounded-s-md absolute top-10 right-0">
                  Oferta del -{item?.offer}%
                </div>
              )}

              <div className="p-8 bg-gray-200 flex justify-center" style={{ width: "500px" }}>
                <Image src={item?.img} className="object-cover" alt="Lavaloza" width={300} height={300} />
              </div>

              <div className="p-8 w-full">
                <h2 className="text-4xl font-extralight">{item?.name}</h2>
                <p className="text-md mt-1">{item?.category}</p>
                <p className="text-5xl font-bold text-green-500 mt-6">{currency(item?.price)}</p>
                <p className="mt-6">{item?.description || "Sin descripción"}</p>

                <div className="flex items-center justify-between mt-12">
                  <p className="text-md">Quedan {item?.stock} unidades</p>
                  <div className="flex">
                    <button className="bg-green-500 text-white py-2 px-6 rounded-full w-44" onClick={addToCart}>
                      Agregar
                    </button>
                    {isSignedIn && (
                      <Link
                        href={`/products/${id}/edit`}
                        className="bg-green-500 text-white py-2 px-6 text-center rounded-full w-44 ml-2"
                        onClick={addToCart}
                      >
                        Editar
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
