import { useState } from "react";
import B from "./B";
import myFirstContext from "./context.js";

function A() {
  const [state, setState] = useState("data of A Component");
  return (
    <div>
      <h2>A Component</h2>
      <button
        onClick={() => {
          setState("Kabir Sagar");
        }}
      >
        Send Data
      </button>
      <br /> <hr />
      <br />
      <myFirstContext.Provider value={state}>
        <B />
      </myFirstContext.Provider>
    </div>
  );
}

export default A;
