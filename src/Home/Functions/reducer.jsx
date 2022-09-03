export const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    let tempcart = state.Array.map((prev) => {
      if (prev.id === action.payload) {
        return { ...prev, value: prev.value + 1, isCart: true };
      }
      return prev;
    });
    return { ...state, Array: tempcart };
  }
  if (action.type === "DECREASE") {
    let tempcart = state.Array.map((prev) => {
      if (prev.id === action.payload) {
        return { ...prev, value: prev.value - 1 };
      }
   

      return prev;
    });
    return { ...state, Array: tempcart };
  }

  if (action.type === "GETTOTAL") {
    const { total, cartAmount } = state.Array.reduce(
      (cartTotal, cartItem) => {
        const { price, value } = cartItem;
        const itemtotal = price * value;

        cartTotal.total += itemtotal;
        cartTotal.cartAmount += value;
        // console.log(price, value);
        return cartTotal;
      },
      {
        total: 0,
        cartAmount: 0,
      }
    );

    return { ...state, total, cartAmount };
  }

  return state;
};
