function getData() {
  var data = [
    101,
    "Iphone 16",
    90000,
    function () {
      console.log("product is displayed");
    },
  ];

  return data;
}

// var myData = getData();
// myData[3]();

var [id, productName, price, displayDetails] = getData();
// console.log(price, productName, id);
displayDetails();
