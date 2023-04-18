import Image from "next/image";
import Link from "next/link";
import shoppingCartIcon from "./images/shopping-cart-icon.svg";
import userIcon from "./images/user-icon.svg";

function Navbar() {
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
        <li className="pl-4">
          <Link href="/">
            <Image src={shoppingCartIcon} width={20} height={20} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
