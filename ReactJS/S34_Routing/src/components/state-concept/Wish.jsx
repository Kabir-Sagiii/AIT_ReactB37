import { useState } from "react";

function Wish() {
  const [text, setText] = useState("Wish Kabir ");
  const [color, setColor] = useState("black");

  function gm() {
    setText("Good Morning, Kabir");
    setColor("green");
  }

  function ga() {
    setText("Good Afternoon, Kabir");
    setColor("coral");
    // useState() // Invalid
  }

  function ge() {
    setText("Good Evening, Kabir");
    setColor("blue");
  }

  function gn() {
    setText("Good Night, Kabir");
    setColor("red");
  }
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ color: color }}>{text}</h1>

      <button style={{ marginRight: "20px" }} onClick={gm}>
        Good Morning
      </button>

      <button style={{ marginRight: "20px" }} onClick={ga}>
        Good Afternoon
      </button>
      <button style={{ marginRight: "20px" }} onClick={ge}>
        Good Evening
      </button>
      <button style={{ marginRight: "20px" }} onClick={gn}>
        Good Night
      </button>
    </div>
  );
}

export default Wish;
