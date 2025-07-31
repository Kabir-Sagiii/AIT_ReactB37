import { useState } from "react";
import { usersdata } from "./Data.js";

function Table() {
  const [state, setState] = useState(usersdata);
  return (
    <div style={{ padding: "30px" }}>
      <table frame="box" rules="all" width={"100%"}>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>CITY</th>
          <th>PHONE</th>
        </tr>
        {state.map((element) => {
          return (
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.gender}</td>
              <td>{element.city}</td>
              <td>{element.phone}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
