function getUser() {
  var obj = {
    username: "Raj Verma",
    id: 101,
    city: "Mumbai",
    gender: "male",
  };

  return obj;
}

// var user = getUser();
// var { username, id, city, gender } = user;

var { gender, username, id, city } = getUser();

console.log(gender, username, city, id);
