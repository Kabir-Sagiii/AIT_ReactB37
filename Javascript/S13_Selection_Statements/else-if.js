//WAF to find the designation of employe based on experience

//0-2yr : Junior Engineer,
// 2.1yr - 5:senior engineer,
// 5.1 - 8yr:teamlead
//8+ : Project manager

function findDesignation(experience) {
  if (experience > 0 && experience <= 2) {
    console.log("Employee is a Junior Engineer");
  } else if (experience > 2 && experience <= 5) {
    console.log("Employee is a Senior Engineer");
  } else if (experience > 5 && experience <= 8) {
    console.log("Employee is a TeamLead");
  } else if (experience > 8) {
    console.log("Employee is a Project Manager");
  } else {
    console.log("Add Valid Experience");
  }
}

findDesignation(3.7);
