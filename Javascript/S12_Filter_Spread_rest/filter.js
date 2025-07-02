var data = [10, 20, 30, 40, 50];

var filteredData = data.filter(function (element, index) {
  return element <= 30;
});

console.log(filteredData);
//[40,50]
