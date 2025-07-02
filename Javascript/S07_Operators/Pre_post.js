// var x = 1;
// x++; //2
// console.log(x);

// var x = 1;
// var result = ++x + ++x; //2+3
// console.log(result, x); //5 3

// var y = 1;
// var yResult = y++ + y++; //1 + 2  ---> 3
// console.log(yResult, y); //3 3,

// var x = 10; //12

// var result = x++ + ++x; // 10 + 12

// console.log(result, x); //22 12

// var x = 100; //104
// var result = x++ + ++x + ++x + x++;
// //   100 + 102 + 103 + 103
// console.log(result, x);

var x = 100; //96
var result = x-- + --x + --x + x--;
//          100 + 98 + 97 + 97
console.log(result, x); // 392 96
