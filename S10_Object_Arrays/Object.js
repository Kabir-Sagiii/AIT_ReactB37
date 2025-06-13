var product = {
  pname: "Iphone 16", //string
  price: 80000, //number
  rating: 4.5, //number
  inStock: true, //boolean

  display: function (x, y) {
    console.log("Product Information is displayed", x, y);
    return "dummy";
  },
  changePrice: () => {
    console.log("Price is Modified");
  },
  discount: function calDiscount() {
    console.log("Offer is going on");
  },
};

product.display(100, true);

product.changePrice();

product.discount();

console.log();
