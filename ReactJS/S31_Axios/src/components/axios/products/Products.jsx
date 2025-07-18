import { useState } from "react";
import axios from "axios";
function Products() {
  const [products, setProducts] = useState([]);
  function getProducts() {
    //API Integration
    var promise = axios.get("https://fakestoreapi.com/products");
    promise
      .then((res) => {
        console.log("then");
        console.log(res);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products Information</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorum
        ipsum sed reiciendis, quod, ad voluptatem placeat tempora molestiae
        pariatur soluta. Accusantium nihil perspiciatis repudiandae enim
        pariatur facere odit. Sunt blanditiis at, dolore quas nostrum aspernatur
        tenetur suscipit! Impedit consequatur mollitia et iusto, perferendis
        porro ipsam, asperiores hic consectetur beatae nulla unde, nostrum
        molestiae quis veritatis soluta. Sequi, ex illo quasi magni quis
        recusandae cumque nemo dolorum ut aliquam temporibus officiis quaerat
        obcaecati asperiores, perspiciatis modi labore earum? Esse deleniti rem
        id numquam voluptatibus aperiam ullam atque, iure consequatur alias
        aspernatur natus distinctio! Delectus, facere. Nemo fuga provident ab
        rem?
      </p>

      <button onClick={getProducts}>Get Products</button>

      {products.length > 0 && (
        <div>
          {products.map((element) => {
            return (
              <img
                src={element.image}
                width={100}
                height={100}
                style={{ marginRight: "20px" }}
              />
            );
          })}
        </div>
      )}

      {/* {products.length > 0 && (
        <ol>
          {products.map((product) => {
            return <li>{product.title}</li>;
          })}
        </ol>
      )} */}
    </div>
  );
}

export default Products;
