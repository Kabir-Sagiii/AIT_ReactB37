import { useRef } from "react";
import myStore from "../store/store";
import inputActionCreator from "../action-creator/inputAction";
function InputComp() {
  const inputRef = useRef(null);

  const getInputData = () => {
    var data = inputRef.current.value;
    var actionObject = inputActionCreator(data);
    myStore.dispatch(actionObject);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>Input Component</h2>
      <br />
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={getInputData}>Submit</button>
    </div>
  );
}

export default InputComp;
