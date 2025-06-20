// for (var i = 1; i <= 100; i++) {
//   console.log(i);
// }

const products = [
  { brandName: "Apple", price: 87123, rating: 4.6 },
  { brandName: "Samsung", price: 40125, rating: 4.5 },
  { brandName: "Oppo", price: 63210, rating: 4.2 },
  { brandName: "Vivo", price: 58674, rating: 4.4 },
  { brandName: "Samsung", price: 75890, rating: 4.7 },
  { brandName: "Apple", price: 89412, rating: 4.8 },
  { brandName: "Oppo", price: 45982, rating: 4.5 },
  { brandName: "Vivo", price: 34980, rating: 4.3 },
  { brandName: "Samsung", price: 70550, rating: 4.6 },
  { brandName: "Apple", price: 88000, rating: 4.7 },
  { brandName: "Vivo", price: 31200, rating: 4.2 },
  { brandName: "Oppo", price: 47800, rating: 4.4 },
  { brandName: "Samsung", price: 82000, rating: 4.8 },
  { brandName: "Apple", price: 67654, rating: 4.5 },
  { brandName: "Vivo", price: 73000, rating: 4.6 },
  { brandName: "Oppo", price: 39410, rating: 4.2 },
  { brandName: "Samsung", price: 58500, rating: 4.4 },
  { brandName: "Apple", price: 75210, rating: 4.7 },
  { brandName: "Vivo", price: 65900, rating: 4.3 },
  { brandName: "Oppo", price: 72200, rating: 4.5 },
  { brandName: "Samsung", price: 33800, rating: 4.2 },
  { brandName: "Apple", price: 86300, rating: 4.6 },
  { brandName: "Vivo", price: 78800, rating: 4.7 },
  { brandName: "Oppo", price: 60500, rating: 4.3 },
  { brandName: "Samsung", price: 47999, rating: 4.4 },
  { brandName: "Apple", price: 89999, rating: 4.8 },
  { brandName: "Vivo", price: 36000, rating: 4.3 },
  { brandName: "Oppo", price: 68500, rating: 4.6 },
  { brandName: "Samsung", price: 79000, rating: 4.5 },
  { brandName: "Apple", price: 84300, rating: 4.7 },
];

//Print objects whose brandName is Apple without using any array methods

for (var i = 0; i < products.length; i++) {
  var element = products[i];
  var result = element.rating < 4.7;
  if (result) {
    console.log(element);
  }
}
