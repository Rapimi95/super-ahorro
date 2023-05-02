import { setCart } from "@/slices/productsSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shoppingCartIcon from "./images/shopping-cart-icon.svg";
import userIcon from "./images/user-icon.svg";

function Navbar() {
  const [cartVisible, setCartVisible] = useState(false);
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

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
          <input placeholder="Buscar un producto..." className="rounded-lg py-2 px-3 w-96" />
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
        <ul className="absolute top-full right-0 bg-white shadow-lg py-8 rounded-b-2xl">
          {cart.length === 0 ? (
            <li className="text-gray-700 px-8 py-2 w-96">Vacio</li>
          ) : (
            <>
              {cart.map((item, index) => (
                <li key={index} className="text-gray-700 px-8 py-2 w-96 flex justify-between">
                  {item.name}
                  <div className="flex items-center">
                    {item.price}
                    <button className="ml-8 text-2xl" onClick={() => remove(item.id)}>
                      ×
                    </button>
                  </div>
                </li>
              ))}
            </>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
