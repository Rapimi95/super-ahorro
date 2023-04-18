import Link from "next/link";

function Footer() {
  return (
      <nav className="bg-green-900 text-white">
        <ul className="flex flex-row items-center">
          <li className="py-6 px-6">
            <Link href="/">
              Terminos y condiciones
            </Link>
          </li>
          <li className="py-6 px-6 mr-auto">
            <Link href="/acerca">
              Política de privacidad
            </Link>
          </li>
          <li className="py-6 px-6">
            <p>
              @Copyright 2023
            </p>
          </li>
        </ul>
      </nav>
  );
}

export default Footer;