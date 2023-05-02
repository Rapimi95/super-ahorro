function Hero() {
  return (
    <div
      className="px-4 flex items-center bg-cover bg-fixed bg-center bg-no-repeat bg-[url('../assets/images/hero-bg-1.png')]"
      style={{ height: "500px" }}
    >
      <div className="max-w-xl ml-auto">
        <div className="text-gray-800">
          <h1 className="text-7xl font-bold">Super Ahorro</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
            ¡No esperes más y ven a Super Ahorro! Te aseguramos que encontrarás todo lo que necesitas a precios
            increíbles, y que te llevarás a casa una experiencia de compra única y satisfactoria!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
