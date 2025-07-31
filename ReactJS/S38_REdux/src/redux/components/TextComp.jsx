import React from "react";
import { useSelector } from "react-redux";

function TextComp() {
  const data = useSelector((storedata) => {
    return storedata.inputValue;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h2>Text Component</h2>
      <br />
      <h4 style={{ color: "green" }}>Data:{data}</h4>
    </div>
  );
}

export default TextComp;
