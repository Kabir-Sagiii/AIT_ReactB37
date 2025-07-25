import { useState } from "react";
import { getUsers } from "./Users";
import "./Users.css";
import UserTable from "./UserTable";

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
        <UserTable state={state} />
      ) : (
        <div className="no-data">
          <h1>No Users Data to Display</h1>
        </div>
      )}
    </div>
  );
}

export default Users;
