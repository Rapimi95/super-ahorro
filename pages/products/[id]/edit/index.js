import { db } from "@/firebaseConfig";
import { setCart, setProducts } from "@/slices/productsSlice";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetail() {
  const [item, setItem] = useState(undefined);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [offer, setOffer] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.cart);

  useEffect(() => {
    if (!id) return;

    (async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    })();
  }, [id]);

  useEffect(() => {
    if (!item) return;

    setName(item.name);
    setCategory(item.category);
    setPrice(item.price);
    setDescription(item.description);
    setStock(item.stock);
    setOffer(item.offer);
  }, [item]);

  async function edit() {
    const docRef = doc(db, "products", id);

    const prod = {
      name,
      description,
      price,
      stock,
      offer,
      category,
    };

    await updateDoc(docRef, prod);

    const arr = products.filter((item) => item.id !== id);
    const arr2 = cart.filter((item) => item.id !== id);

    dispatch(setProducts([...arr, prod]));
    dispatch(setCart([...arr2, prod]));

    router.push(`/products/${id}`);
  }

  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <div className="p-6 flex justify-center items-center" style={{ height: "calc(100vh - (68px + 72px))" }}>
          {item && (
            <div className="shadow-lg rounded-3xl w-4/5 overflow-hidden flex relative">
              <div className="p-8 bg-gray-200 flex justify-center" style={{ width: "500px" }}>
                <Image src={item?.img} className="object-cover" alt="Lavaloza" width={300} height={300} />
              </div>

              <div className="p-8 w-full">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Nombre"
                  className="bg-gray-200 rounded-lg py-2 px-4 w-full mt-6"
                />
                <div className="flex gap-2">
                  <input
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    placeholder="Categoría"
                    className="bg-gray-200 rounded-lg py-2 px-4 w-full mt-6"
                  />
                  <input
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    placeholder="Precio"
                    className="bg-gray-200 rounded-lg py-2 px-4 w-full mt-6"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    value={offer}
                    onChange={(event) => setOffer(event.target.value)}
                    placeholder="Oferta"
                    className="bg-gray-200 rounded-lg py-2 px-4 w-full mt-6"
                  />
                  <input
                    value={stock}
                    onChange={(event) => setStock(event.target.value)}
                    placeholder="Unidades disponibles"
                    className="bg-gray-200 rounded-lg py-2 px-4 w-full mt-6"
                  />
                </div>
                <input
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Descripción"
                  className="bg-gray-200 rounded-lg py-2 px-4 w-full mt-6"
                />

                <div className="flex items-center justify-end mt-12">
                  <button className="bg-green-500 text-white py-2 px-6 rounded-full w-44" onClick={edit}>
                    Editar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
