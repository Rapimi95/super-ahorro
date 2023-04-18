export default function SignIn() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <div
          className="p-6 flex flex-col justify-center items-center"
          style={{ height: "calc(100vh - (68px + 72px))" }}
        >
          <h2 className="text-5xl font-light">Iniciar sesión</h2>
          <input placeholder="Correo electrónico" className="bg-gray-200 rounded-lg py-2 px-4 w-96 mt-6" />
          <input placeholder="Contraseña" className="bg-gray-200 rounded-lg py-2 px-4 w-96 mt-2" />
          <button className="bg-green-500 text-white py-2 px-6 rounded-full mt-6 w-96">Aceptar</button>
        </div>
      </div>
    </main>
  );
}
