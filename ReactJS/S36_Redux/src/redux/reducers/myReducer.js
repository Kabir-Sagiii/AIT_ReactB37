const myReducer = (currentStore, action) => {
  var data;
  //implement custom logic to update store with data
  if (action.type === "input") {
    data = action.payload;
  }
  return data;
};

export default myReducer;
