var user = {
  name: "Kabir",
  gender: "male",
  id: 101,
};

var { id, name, gender } = user;

function f1() {
  //   console.log(user.name);
  console.log(name);
}
function f2() {
  //   console.log(user.gender);
  console.log(gender);
}

function f3() {
  //   console.log(user.name, user.gender, user.id);
  console.log(name, gender, id);
}

f1();
f2();
f3();
