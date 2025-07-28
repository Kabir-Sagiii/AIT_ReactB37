import { useState } from "react";

function DynamicData() {
  const [state, setState] = useState([
    "Raj",
    "Sonam",
    "Poonam",
    "Rohit",
    "Rakesh",
    "Sagar",
    "Aadi",
    "Priya",
    "AIT",
    "React",
    "JSX",
    "Angular",
  ]);
  //   const [state, setState] = useState([
  //     <li>Riya</li>,
  //     <li>Pooja</li>,
  //     <li>Sonam</li>,
  //     <li>Poonam</li>,
  //   ]);
  return (
    <div style={{ padding: "50px" }}>
      <h2>Dynamic Data</h2>
      <ol>
        {state.map(function (element, index) {
          return <li>{element}</li>;
        })}
      </ol>
    </div>
  );
}

export default DynamicData;
