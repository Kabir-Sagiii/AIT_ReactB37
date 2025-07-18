import { useState } from "react";
import { getUsers } from "./Users";
import "./Users.css";

function Users() {
  const [state, setState] = useState([]);

  return (
    <div style={{ padding: "50px" }}>
      <h1>Users Information</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        ducimus corporis obcaecati quisquam laboriosam suscipit culpa provident,
        quo cum nam? Voluptatibus dignissimos maxime ipsum inventore est error
        doloremque ex praesentium, aliquid molestiae eos ipsam maiores?
        Voluptatum, possimus sed at facere inventore omnis quaerat ex
        reprehenderit vitae quod debitis eos similique ipsum deleniti voluptas
        quos veniam. Dolores, eligendi adipisci repellendus dolore veniam est
        minus, dolorum quis tenetur delectus, itaque esse. Totam, corrupti?
        Dolores recusandae voluptatum asperiores vitae minima earum harum quasi
        quos consectetur quod repellendus eum, doloribus voluptas deleniti odit
        ipsa quaerat nesciunt fugiat, provident mollitia omnis? Excepturi
        voluptatem mollitia omnis.
      </p>
      <button
        onClick={() => {
          getUsers(setState);
        }}
      >
        Get Users
      </button>

      {state.length > 0 ? (
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
                      <img
                        src={element.picture.medium}
                        width={50}
                        height={50}
                      />
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
      ) : (
        <div className="no-data">
          <h1>No Users Data to Display</h1>
        </div>
      )}
    </div>
  );
}

export default Users;
