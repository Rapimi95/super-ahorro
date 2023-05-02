import { auth } from "@/firebaseConfig";
import { setIsSignedIn } from "@/slices/authSlice";
import { setCart } from "@/slices/productsSlice";
import { currency } from "@/utils";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shoppingCartIcon from "./images/shopping-cart-icon.svg";
import userIcon from "./images/user-icon.svg";

function Navbar() {
  const [cartVisible, setCartVisible] = useState(false);
  const [search, setSearch] = useState("");
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const sum = useMemo(() => {
    let sum = 0;
    cart.forEach((item) => (sum += Number(item.price)));
    return sum;
  }, [cart]);

  function remove(id) {
    dispatch(setCart(cart.filter((item) => item.id !== id)));
  }

  return (
    <nav className="bg-green-500 sticky top-0 text-white shadow-lg z-[1000]">
      <ul className="flex flex-row items-center px-6 py-2">
        <li className="mr-auto text-2xl">
          <Link href="/">Super Ahorro</Link>
        </li>
        <li className="px-6">
          <div className="rounded-lg py-2 px-3 w-96 flex bg-white">
            <input
              placeholder="Buscar un producto..."
              className="w-full text-gray-700"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <Link href={`/search/${search}`} className="bg-green-500 px-2 rounded-md ml-3">
              Buscar
            </Link>
          </div>
        </li>
        <li className="p-4">
          <Link href="/signin">
            <Image src={userIcon} width={20} height={20} alt="" />
          </Link>
        </li>
        <li className="pl-4 flex items-center">
          <button onClick={() => setCartVisible((prev) => !prev)}>
            <Image src={shoppingCartIcon} width={20} height={20} alt="" />
          </button>
        </li>
      </ul>

      {cartVisible && (
        <>
          {cart.length === 0 ? (
            <div className="absolute top-full right-0 bg-white shadow-lg rounded-b-2xl">
              <div className="text-gray-700 px-8 py-4 w-96">Vacío</div>
            </div>
          ) : (
            <ul className="absolute top-full right-0 bg-white shadow-lg pt-4 rounded-b-2xl">
              {cart.map((item, index) => (
                <li key={index} className="text-gray-700 px-8 py-2 w-96 flex justify-between">
                  {item.name}
                  <div className="flex items-center">
                    {currency(item.price)}
                    <button className="ml-8 text-2xl" onClick={() => remove(item.id)}>
                      ×
                    </button>
                  </div>
                </li>
              ))}

              <div className="border border-gray-100 my-2"></div>

              <li className="text-gray-700 px-8 py-2 w-96 flex justify-between">
                Total
                <div className="flex items-center">
                  {currency(sum)}
                  <button className="ml-8 text-2xl text-white" onClick={() => remove(item.id)}>
                    ×
                  </button>
                </div>
              </li>
            </ul>
          )}
        </>
      )}
    </nav>
  );
}

export default Navbar;
