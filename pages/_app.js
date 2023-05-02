import Main from "@/components/shared/Main";
import store from "@/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </Provider>
  );
}
