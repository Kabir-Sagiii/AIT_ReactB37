import { useRef } from "react";

function DOM() {
  const h2Ref = useRef(null); //h2Ref = {current:null}
  const buttonRef = useRef(null);

  const modifyUI = () => {
    //logic to change color of h2
    h2Ref.current.style.color = "red";
    h2Ref.current.innerText = "DOM Manipulated";

    buttonRef.current.style.padding = "10px 20px";
    buttonRef.current.innerText = "Submit Content";
    buttonRef.current.style.marginTop = "20px";

    //h2Ref.current === document.getElementById("id value")
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 ref={h2Ref}>DOM Manipulation using useRef() hook</h2>
      <button ref={buttonRef} onClick={modifyUI}>
        Modify
      </button>
    </div>
  );
}

export default DOM;
