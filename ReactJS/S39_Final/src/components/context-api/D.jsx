import { useContext } from "react";
import myFirstContext from "./context";

function D() {
  const contextData = useContext(myFirstContext);
  return (
    <div>
      <h2>D Component</h2>
      <p style={{ color: "green", fontSize: "21px", fontWeight: "bolder" }}>
        Data : {contextData}
      </p>
    </div>
  );
}

export default D;
