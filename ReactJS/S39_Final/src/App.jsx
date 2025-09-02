import { lazy, Suspense } from "react";
// import Nav from "./components/nav/Nav";
// import Home from "./components/routing/home/Home";

import Profile from "./components/routing/profile/Profile";
import ContactUs from "./components/routing/contactus/ContactUs";
import Signin from "./components/routing/sign-in/Signin";
import Signup from "./components/routing/sign-up/Signup";

import { Route, Routes } from "react-router-dom";
import Cart from "./components/routing/cart/Cart";
import DOM from "./components/use-ref/DOM";
import UseReducer from "./components/use-reducer/UseReducer";
import InputComp from "./redux/components/InputComp";
import TextComp from "./redux/components/TextComp";
import { Toaster } from "react-hot-toast";

const Nav = lazy(() => import("./components/nav/Nav"));
const Home = lazy(() => import("./components/routing/home/Home"));
const ProductDetails = lazy(() =>
  import("./components/routing/product-details/ProductDetails")
);

const Products = lazy(() => import("./components/routing/products/Products"));
function App() {
  return (
    <div>
      <Toaster />
      <Nav />
      {/* <InputComp />
      <hr />
      <TextComp /> */}
      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          <Route path={"/"} element={<Home />} />

          <Route path={"/signin"} element={<Signin />} />

          <Route path={"/signup"} element={<Signup />} />

          <Route path={"/profile"} element={<Profile />} />

          <Route path={"/products"} element={<Products />} />

          <Route path={"/product-details"} element={<ProductDetails />} />

          <Route path={"/contact"} element={<ContactUs />} />

          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
