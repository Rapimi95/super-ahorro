import { auth } from "@/firebaseConfig";
import { setIsSignedIn } from "@/slices/authSlice";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(setIsSignedIn(true));
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("email o contraseña incorrectos");
      console.log(error);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      dispatch(setIsSignedIn(false));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div className="max-w-screen-xl mx-auto">
        <div
          className="p-6 flex flex-col justify-center items-center"
          style={{ height: "calc(100vh - (68px + 72px))" }}
        >
          {isSignedIn ? (
            <>
              <h2 className="text-5xl font-light">Has iniciado sesión</h2>
              <button className="bg-green-500 text-white py-2 px-6 rounded-full mt-6 w-96" onClick={logout}>
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <h2 className="text-5xl font-light">Iniciar sesión</h2>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Correo electrónico"
                className="bg-gray-200 rounded-lg py-2 px-4 w-96 mt-6"
              />
              <input
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Contraseña"
                className="bg-gray-200 rounded-lg py-2 px-4 w-96 mt-2"
              />
              <button className="bg-green-500 text-white py-2 px-6 rounded-full mt-6 w-96" onClick={login}>
                Aceptar
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
