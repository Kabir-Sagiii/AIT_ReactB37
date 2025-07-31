import { useState } from "react";
import Child from "./Child";
function Paent() {
  const [state, setState] = useState();

  function getTextData(event) {
    //event is pre-defined object
    //using event object we can access the DOM element on which event is triggered

    setState(event.target.value);
  }

  return (
    <div
      style={{
        width: "500px",
        padding: "30px",
        textAlign: "center",
        boxShadow: "0 0 10px green",
        margin: "50px auto",
      }}
    >
      <h2>Parent Component</h2>
      <input type="text" placeholder="enter text" onChange={getTextData} />
      <hr />
      <br />
      <Child data={state} />
    </div>
  );
}

export default Paent;
