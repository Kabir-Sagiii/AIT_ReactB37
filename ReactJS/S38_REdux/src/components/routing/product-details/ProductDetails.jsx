import React from "react";
import { useSelector } from "react-redux";
import "./ProductDetails.css";
function ProductDetails() {
  const { id, title, category, description, rating, image, price } =
    useSelector((storedata) => {
      return storedata.productdetails;
    });
  return (
    <div className="product-details">
      <div>
        <img src={image} alt="" width={"100%"} height={470} />
      </div>
      <div className="product-details-data">
        <div style={{ display: "flex" }}>
          <dl style={{ width: "70%" }}>
            <dt>Product Title</dt>
            <dd>{title}</dd>
          </dl>
          <dl>
            <dt>Price</dt>
            <dd>$ {price}</dd>
          </dl>
        </div>

        <div style={{ display: "flex" }}>
          <dl style={{ width: "70%" }}>
            <dt>Category</dt>
            <dd>{category}</dd>
          </dl>
          <dl>
            <dt>Rating</dt>
            <dd>{rating.rate}</dd>
          </dl>
        </div>
        <dl>
          <dt>Description</dt>
          <dd>{description}</dd>
        </dl>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
