import CategoryFilter from "@/components/home/CategoryFilter";
import CategoryList from "@/components/home/CategoryList";
import { useSelector } from "react-redux";
import Hero from "../components/shared/Hero";

export default function Home() {
  const products = useSelector((state) => state.products.products);

  return (
    <main>
      <Hero />
      <div className="max-w-screen-xl mx-auto py-16">
        <div className="p-6 pb-16">
          <CategoryFilter />
        </div>
        <div id="limpieza" className="p-6">
          <CategoryList title="Limpieza" items={products.filter((item) => item.category === "Limpieza")} />
        </div>
        <div id="vegetales" className="p-6">
          <CategoryList title="Vegetales" items={products.filter((item) => item.category === "Vegetales")} />
        </div>
        <div id="carnes" className="p-6">
          <CategoryList title="Carnes" items={products.filter((item) => item.category === "Carnes")} />
        </div>
        <div id="dulces" className="p-6">
          <CategoryList title="Dulces" items={products.filter((item) => item.category === "Dulces")} />
        </div>
      </div>
    </main>
  );
}
