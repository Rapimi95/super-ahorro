import Image from "next/image";
import Link from "next/link";
import lavaloza from "../../../assets/tmp/lavaloza.png";

function CategoryListItem() {
  return (
    <Link href="/products/1" className="flex flex-col items-center shadow-lg rounded-3xl w-56 h-72 overflow-hidden">
      <div className="bg-gray-200 h-2/5 w-full flex justify-center">
        <Image src={lavaloza} className="relative top-8" alt="Lavaloza" width={100} height={100} />
      </div>
      <div className="relative flex flex-col justify-end items-end h-3/5 p-6">
        <p className="w-full text-center">Lavaloza</p>
        <p className="w-full text-center text-xl font-bold text-green-500 mt-1">$10.000</p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-full mt-4 w-44">Agregar</button>
      </div>
    </Link>
  );
}

export default CategoryListItem;
