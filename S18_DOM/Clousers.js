function outer() {
  var username = "Kabir";

  function inner() {
    var gender = "male";
    console.log(username);
  }
  //   inner();
  //   console.log(gender);

  return inner;
}

// console.log(gender);

var fn = outer();
fn();
