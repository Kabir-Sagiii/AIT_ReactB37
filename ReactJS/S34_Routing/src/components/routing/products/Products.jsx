import { useState, useEffect } from "react";
import "./Product.css";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        alert("Failed to fetch products");
      });
  }, []);
  return (
    <div className="products">
      <div className="adContainer">
        <h1>Products Information</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          deserunt quas dicta. In illum, soluta blanditiis cum labore magni
          officiis expedita ullam, non nam, dolor necessitatibus. Quisquam,
          atque illo? Ad! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quis deserunt quas dicta. In illum, soluta blanditiis cum labore
          magni officiis expedita ullam, non nam, dolor necessitatibus.
          Quisquam, atque illo? Ad!
        </p>
      </div>

      <div className="categories">
        <section>
          <input defaultChecked type="radio" name="Category" id="all" />
          <label htmlFor="all">ALL</label>
        </section>
        <section>
          <input type="radio" name="Category" id="electronics" />
          <label htmlFor="electronics">Electronics</label>
        </section>
        <section>
          <input type="radio" name="Category" id="jewelery" />
          <label htmlFor="jewelery">Jewelery</label>
        </section>
        <section>
          <input type="radio" name="Category" id="mens" />
          <label htmlFor="mens">MensClothing</label>
        </section>
        <section>
          <input type="radio" name="Category" id="womens" />
          <label htmlFor="womens">Womens</label>
        </section>
      </div>

      <div className="products">
        {products.map((product) => {
          return (
            <div className="card">
              <img src={product.image} alt="" width={"100%"} height={200} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                }}
              >
                Product Details
              </button>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
