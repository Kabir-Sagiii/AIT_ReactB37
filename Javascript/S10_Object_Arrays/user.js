var user = {
  name: "aditya goud",
  gender: "male",

  skills: ["html", "css", "js", "reactjs", { cname: "java", exp: 10 }],
  // user.skills[4].cname
  address: {
    city: "hyd",
    state: "TS",
    pincodes: {
      ameerpet: 500018,
      hitechcity: 500015,
      secbd: 500019,
    },
  },
};

//skills
console.log(user.skills[2]);
console.log(user.skills[4].cname);

// //update
// user.address.city = "warangal";

// //access
// console.log(user.address.city);

// //insert
// user.address.pincode = 500018;
// console.log(user.address);

// //remove
// delete user.address.state;
// console.log(user.address);

// //nested
// console.log(user.address.pincodes.ameerpet);
