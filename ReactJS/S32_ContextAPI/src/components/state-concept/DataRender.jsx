import { useState } from "react";

function DataRender() {
  const [state, setState] = useState([<p>para 1</p>, <h3>heading h3</h3>]);
  return (
    <div>
      <section>{state}</section>
    </div>
  );
}

export default DataRender;
