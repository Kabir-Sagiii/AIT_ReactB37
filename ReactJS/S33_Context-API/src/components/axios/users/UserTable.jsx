import React from "react";

function UserTable({ state }) {
  return (
    <div className="tableContainer">
      <table width={"100%"} frame="above" rules="rows">
        <thead>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>EMAIL</th>
          <th>CITY</th>
        </thead>
        <tbody align="center">
          {state.map((element) => {
            return (
              <tr>
                <td>
                  <img src={element.picture.medium} width={50} height={50} />
                </td>
                <td>
                  {element.name.first} {element.name.last}
                </td>
                <td>{element.gender}</td>
                <td>{element.email}</td>
                <td>{element.location.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
