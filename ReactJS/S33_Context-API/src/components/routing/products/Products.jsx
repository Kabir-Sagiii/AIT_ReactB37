import React from "react";
import "./Product.css";

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise cancelling over-ear headphones.",
    price: "$199",
    image: "https://via.placeholder.com/300x200?text=Product+1",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and health stats.",
    price: "$129",
    image: "https://via.placeholder.com/300x200?text=Product+2",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "High-quality portable speaker.",
    price: "$79",
    image: "https://via.placeholder.com/300x200?text=Product+3",
  },
  {
    id: 4,
    name: "VR Headset",
    description: "Immersive gaming experience.",
    price: "$299",
    image: "https://via.placeholder.com/300x200?text=Product+4",
  },
];

const Products = () => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
