import axios from "axios";
export function getUsers(setState) {
  axios
    .get("https://randomuser.me/api/?results=50")
    .then((res) => {
      console.log(res.data.results);
      setState(res.data.results);
    })
    .catch((error) => {
      alert("Something went wrong");
    });
}
