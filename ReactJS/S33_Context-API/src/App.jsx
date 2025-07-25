import A from "./components/context-api/A";
import Home from "./components/routing/home/Home";
import Products from "./components/routing/products/Products";
import Profile from "./components/routing/profile/Profile";
import ContactUs from "./components/routing/contactus/ContactUs";
function App() {
  return (
    <div>
      <Home />
      <Products />
      <Profile />
      <ContactUs />
    </div>
  );
}

export default App;
