function getUserData(defaultName) {
  var name = defaultName;

  function changeName(newName) {
    console.log(name);
    name = newName;
    console.log(name);
  }

  return [name, changeName];
}

// var arrayV = getUserData("Riya");

// var [name, changeName] = arrayV;

var [name, changeName] = getUserData("Ramesh");
console.log(name);
changeName("Sneha"); //2nd

// const arrayV = getUserData("Kabir");
// // console.log(arrayV);

// console.log(arrayV[0]);
// arrayV[1]("Sagar"); //1st
