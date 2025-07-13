import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <br />
    <App />
    <br />
    <Footer />
  </div>
);
