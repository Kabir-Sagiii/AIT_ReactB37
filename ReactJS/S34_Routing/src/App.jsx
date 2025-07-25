import Nav from "./components/nav/Nav";
import Home from "./components/routing/home/Home";
import Products from "./components/routing/products/Products";
import Profile from "./components/routing/profile/Profile";
import ContactUs from "./components/routing/contactus/ContactUs";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/profile"} element={<Profile />} />

        <Route path={"/products"} element={<Products />} />

        <Route path={"/contact"} element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
