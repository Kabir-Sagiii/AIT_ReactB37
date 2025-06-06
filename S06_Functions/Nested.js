function f1() {
  console.log("f1 is called");
  function f2() {
    console.log("f2 is called");
    function f3() {
      console.log("f3 is called");
    }
    function f4() {
      console.log("f4");
    }

    f3();
  }

  f2();
}

f1();

//Note: inner functions we cannot call outside the outer functions
