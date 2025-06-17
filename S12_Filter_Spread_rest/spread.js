var obj1 = {
  name: "sameer",
  gender: "male",
  city: "mumbai",
};

var obj2 = {
  state: "MH",
  ...obj1,
  email: "sameer@gmail.com",
  name: "Zoya ",
  gender: "female",
};

var user1 = ["sameer", 101, "male"];
var user2 = ["pune", ...user1, "sameer@gmail.com"];

console.log(user1);
console.log(user2);
