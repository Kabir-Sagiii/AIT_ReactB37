import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
function Cart() {
  const dispatch = useDispatch();
  const cartdata = useSelector((storedata) => {
    return storedata.carts;
  });

  const removeProduct = (id) => {
    dispatch({ type: "remove-cart", payload: id });
  };
  return (
    <div>
      {cartdata.length > 0 ? (
        <div className="cartTable">
          <table width={"90%"}>
            <thead align="center">
              <tr>
                <td>Image</td>
                <td>Title</td>
                <td>Price</td>
                <td>Qty</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody align="center">
              {cartdata.map((product) => {
                return (
                  <tr>
                    <td>
                      <img src={product.image} alt="" width={70} height={70} />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>- 1 +</td>
                    <td>
                      <button
                        onClick={() => {
                          removeProduct(product.id);
                        }}
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 style={{ textAlign: "center", color: "red", marginTop: "100px" }}>
          No Data added in the Cart
        </h1>
      )}
    </div>
  );
}

export default Cart;
