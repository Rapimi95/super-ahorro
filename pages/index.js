import CategoryFilter from "@/components/home/CategoryFilter";
import CategoryList from "@/components/home/CategoryList";
import Hero from "../components/shared/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-screen-xl mx-auto py-16">
        <div className="p-6 pb-16">
          <CategoryFilter />
        </div>
        <div id="limpieza" className="p-6">
          <CategoryList title="Limpieza" />
        </div>
        <div id="vegetales" className="p-6">
          <CategoryList title="Vegetales" />
        </div>
        <div id="carnes" className="p-6">
          <CategoryList title="Carnes" />
        </div>
        <div id="dulces" className="p-6">
          <CategoryList title="Dulces" />
        </div>
      </div>
    </main>
  );
}
