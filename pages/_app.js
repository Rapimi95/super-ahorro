import "@/styles/globals.css";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
