import { setCart } from "@/slices/productsSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

function CategoryListItem({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);

  function addToCart(e) {
    e.preventDefault();
    if (!cart.find((i) => i.id === item.id)) {
      dispatch(setCart([...cart, item]));
    }
  }

  return (
    <Link
      href={`/products/${item.id}`}
      className="flex flex-col items-center shadow-lg rounded-3xl w-56 h-72 overflow-hidden"
    >
      <div className="bg-gray-200 h-2/5 w-full flex justify-center">
        <Image src={item.img} className="relative top-8 object-cover" alt="Lavaloza" width={100} height={100} />
      </div>
      <div className="relative flex flex-col justify-end items-end h-3/5 p-6">
        <p className="w-full text-center">{item.name}</p>
        <p className="w-full text-center text-xl font-bold text-green-500 mt-1">{item.price}</p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-full mt-4 w-44" onClick={addToCart}>
          Agregar
        </button>
      </div>
    </Link>
  );
}

export default CategoryListItem;
