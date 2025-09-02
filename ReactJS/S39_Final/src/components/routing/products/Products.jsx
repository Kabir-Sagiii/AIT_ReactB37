import { useState, useEffect, useRef } from "react";
import "./Product.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const btnRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const cartdata = useSelector((store) => {
    return store.carts;
  });

  useEffect(() => {
    getData("https://fakestoreapi.com/products");
  }, []);

  const getData = (url) => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setData(res.data);
      })
      .catch(() => {
        alert("Failed to fetch products");
      });
  };

  const filterDataBasedOnCategory = (category) => {
    if (category === "all") {
      setProducts(data);
    } else {
      setProducts(data.filter((element) => element.category === category));
    }
  };

  const getProductDetail = (product) => {
    dispatch({
      type: "product-details",
      payload: product,
    });
  };

  const addToCart = (cartproduct) => {
    dispatch({ type: "carts", payload: cartproduct });
  };

  const removeCart = (id) => {
    dispatch({ type: "remove-cart", payload: id });
  };

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
          <input
            defaultChecked
            type="radio"
            name="Category"
            id="all"
            onChange={() => {
              filterDataBasedOnCategory("all");
            }}
          />
          <label htmlFor="all">ALL</label>
        </section>
        <section>
          <input
            type="radio"
            name="Category"
            id="electronics"
            onChange={() => {
              filterDataBasedOnCategory("electronics");
            }}
          />
          <label htmlFor="electronics">Electronics</label>
        </section>
        <section>
          <input
            type="radio"
            name="Category"
            id="jewelery"
            onChange={() => {
              filterDataBasedOnCategory("jewelery");
            }}
          />
          <label htmlFor="jewelery">Jewelery</label>
        </section>
        <section>
          <input
            type="radio"
            name="Category"
            id="mens"
            onChange={() => {
              filterDataBasedOnCategory("men's clothing");
            }}
          />
          <label htmlFor="mens">MensClothing</label>
        </section>
        <section>
          <input
            type="radio"
            name="Category"
            id="womens"
            onChange={() => {
              filterDataBasedOnCategory("women's clothing");
            }}
          />
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
              <Link to="/product-details">
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                  }}
                  onClick={() => {
                    getProductDetail(product);
                  }}
                >
                  Product Details
                </button>
              </Link>

              {cartdata.length > 0 &&
              cartdata.find((cart) => cart.id == product.id) ? (
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                  }}
                  onClick={() => {
                    removeCart(product.id);
                  }}
                >
                  Remove Cart
                </button>
              ) : (
                <button
                  ref={btnRef}
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
