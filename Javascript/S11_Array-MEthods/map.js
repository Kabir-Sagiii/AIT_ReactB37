var arr = [10, 20, 30, 40, 50, 60, 70];

var newArray = arr.map(function (element, index) {
  var x = element * 10;
  return x; //[r1,r2,r3,r4,r5]
});

console.log(newArray);
