import CategoryList from "@/components/home/CategoryList";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const router = useRouter();
  const { search } = router.query;
  const products = useSelector((state) => state.products.products);

  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <div className="p-6 flex justify-center" style={{ minHeight: "calc(100vh - (68px + 72px))" }}>
          <div id="limpieza" className="p-6 w-full">
            <CategoryList
              title="Resultados de la busqueda"
              items={products.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()))}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
