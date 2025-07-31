import { useContext } from "react";
import myFirstContext from "./context";
import D from "./D";
function C() {
  var data = useContext(myFirstContext);
  return (
    <div>
      <h2>C component : {data}</h2>
      <br /> <hr />
      <br />
      <D />
    </div>
  );
}

export default C;
