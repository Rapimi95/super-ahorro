import Image from "next/image";
import lavaloza from "../../../assets/tmp/lavaloza.png";

export default function SignIn() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <div className="p-6 flex justify-center items-center" style={{ height: "calc(100vh - (68px + 72px))" }}>
          <div className="shadow-lg rounded-3xl w-4/5 overflow-hidden flex relative">
            <div className="bg-blue-200 px-6 py-2 rounded-s-md absolute top-10 right-0">Oferta del -20%</div>

            <div className="p-8 bg-gray-200 flex justify-center" style={{ width: "500px" }}>
              <Image src={lavaloza} className="" alt="Lavaloza" width={300} height={300} />
            </div>

            <div className="p-8">
              <h2 className="text-4xl font-extralight">Lavaloza</h2>
              <p className="text-md mt-1">Limpieza</p>
              <p className="text-5xl font-bold text-green-500 mt-6">$10.000</p>
              <p className="mt-6">
                Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                Descripción del producto
              </p>

              <div className="flex items-center justify-between mt-12">
                <p className="text-md">Quedan 12 unidades</p>
                <button className="bg-green-500 text-white py-2 px-6 rounded-full w-44">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
