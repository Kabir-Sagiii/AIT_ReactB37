var data = [10, 20, 30, 40, 50];

//Array Destructuring
var [x1, _, x3, x4, x5] = data;

function f1() {
  console.log(x3);
  //   var x;
  //   //   x = data[3];
  //   x = x4;
  //   console.log(x, x2);
}

function f2() {
  console.log(x5);
  //   var y;
  //   y = x4;
  //   console.log(y, x2);
}

function f3() {
  console.log(x1);
  //   var z;
  //   z = x4;
  //   console.log(z, x1);
}

f1();
f2();
f3();
