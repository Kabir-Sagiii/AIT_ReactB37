var user = {
  name: "Sagar",
  gender: "male",
  id: 101,
  address: {
    city: "mumbai",
    state: "MH",
  },
  phone: 989898,
  skills: ["reactjs", "angular", "DevOps"],
};

var value = user.id;
var userName = user["name"];

console.log(value);
console.log(userName);
