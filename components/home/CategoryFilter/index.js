import Image from "next/image";
import cleaningImg from "./images/cleaning.png";
import vegetablesImg from "./images/vegetables.png";
import meatsImg from "./images/meats.png";
import sweetsImg from "./images/sweets.png";
import Link from "next/link";

function CategoryFilter() {
  return (
    <ul className="grid grid-cols-4 justify-items-center gap-10 w-full">
      <li>
        <Link href="#limpieza" className="flex gap-5 items-center p-4 shadow-lg rounded-3xl w-56">
          <Image src={cleaningImg} alt="Limpieza" width={50} height={50} />
          <p className="w-full text-center">Limpieza</p>
        </Link>
      </li>
      <li>
        <Link href="#vegetales" className="flex gap-5 items-center p-4 shadow-lg rounded-3xl w-56">
          <Image src={vegetablesImg} alt="Vegetales" width={50} height={50} />
          <p className="w-full text-center">Vegetales</p>
        </Link>
      </li>
      <li>
        <Link href="#carnes" className="flex gap-5 items-center p-4 shadow-lg rounded-3xl w-56">
          <Image src={meatsImg} alt="Carnes" width={50} height={50} />
          <p className="w-full text-center">Carnes</p>
        </Link>
      </li>
      <li>
        <Link href="#dulces" className="flex gap-5 items-center p-4 shadow-lg rounded-3xl w-56">
          <Image src={sweetsImg} alt="Dulces" width={50} height={50} />
          <p className="w-full text-center">Dulces</p>
        </Link>
      </li>
    </ul>
  );
}

export default CategoryFilter;
