var arr = [10, 20, 30, 40, 50, 60, 70, "hello"];

var subArray = arr.slice(2, 4 + 1);
var newSubArray = arr.slice(3);

//Assignment
arr.slice(-3);
arr.slice(3, 1);
arr.slice(3, 1 + 1);
arr.slice(3, -1);
arr.slice(-3, -1);

console.log(subArray);
console.log(newSubArray);
