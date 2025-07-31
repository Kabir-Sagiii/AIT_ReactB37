import { useReducer } from "react";

//https://react.dev/reference/react/useReducer

const myReducer = (state, action) => {
  if (action.type === "inc") {
    state = state + 1;
  } else if (action.type === "dec") {
    state = state - 1;
  }
  return state;
};

function UseReducer() {
  const [state, dispatch] = useReducer(myReducer, 0);
  return (
    <div style={{ padding: "50px" }}>
      <h1>Count Value : {state}</h1> <br />
      <button
        onClick={() => {
          dispatch({
            //action object
            type: "inc",
          });
        }}
      >
        incCount
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        decCount
      </button>
    </div>
  );
}

export default UseReducer;
