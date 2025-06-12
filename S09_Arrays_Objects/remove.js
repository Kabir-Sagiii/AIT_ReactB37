var user = {
  name: "Sagar",
  gender: "male",
  id: 101,
};

console.log(user);
console.log("--------------------------------");

delete user.gender;
delete user["name"];

console.log(user);
