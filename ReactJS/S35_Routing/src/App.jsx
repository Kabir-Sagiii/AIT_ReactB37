import Nav from "./components/nav/Nav";
import Home from "./components/routing/home/Home";
import Products from "./components/routing/products/Products";
import Profile from "./components/routing/profile/Profile";
import ContactUs from "./components/routing/contactus/ContactUs";
import Signin from "./components/routing/sign-in/Signin";
import Signup from "./components/routing/sign-up/Signup";
import ProductDetails from "./components/routing/product-details/ProductDetails";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/routing/cart/Cart";
import DOM from "./components/use-ref/DOM";
import UseReducer from "./components/use-reducer/UseReducer";
function App() {
  return (
    <div>
      <Nav />
      {/* <DOM /> */}
      <UseReducer />
      {/* <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/signin"} element={<Signin />} />

        <Route path={"/signup"} element={<Signup />} />

        <Route path={"/profile"} element={<Profile />} />

        <Route path={"/products"} element={<Products />} />

        <Route path={"/product-details"} element={<ProductDetails />} />

        <Route path={"/contact"} element={<ContactUs />} />

        <Route path={"/cart"} element={<Cart />} />
      </Routes> */}
    </div>
  );
}

export default App;
