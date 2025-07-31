const myReducer = (
  currentStore = {
    inputValue: "--------",
    carts: [],
    productdetails: {
      title: "",
      id: "",
      category: "",
      image: "",
      price: 0,
      rating: {},
      description: "",
    },
  },
  action
) => {
  //implement custom logic to update store with data
  if (action.type === "input") {
    currentStore = {
      ...currentStore,
      inputValue: action.payload,
    };
  } else if (action.type === "product-details") {
    currentStore = {
      ...currentStore,
      productdetails: action.payload,
    };
  } else if (action.type === "carts") {
    currentStore = {
      ...currentStore,
      carts: [...currentStore.carts, action.payload],
    };
  } else if (action.type === "remove-cart") {
    currentStore = {
      ...currentStore,
      carts: currentStore.carts.filter((cart) => cart.id != action.payload),
    };
  }
  return currentStore;
};

export default myReducer;
