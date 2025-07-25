import React from "react";

function Child(props) {
  //props ={data:"-----"}
  return (
    <div
      style={{
        width: "400px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 0 10px red",
      }}
    >
      <h2>Child Component</h2>
      <p style={{ fontWeight: "bold", color: "red" }}>{props.data}</p>
    </div>
  );
}

export default Child;
