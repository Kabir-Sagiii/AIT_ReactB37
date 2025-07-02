var x = function () {
  console.log("Hello I am Anonymous");
};

x();

function createUser(getUser) {
  getUser();
}

createUser(function () {
  console.log("User Data");
});
