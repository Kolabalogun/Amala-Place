import React, { useState, useContext, useReducer, useEffect } from "react";
import { RiceArray } from "./Data";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
  Array: RiceArray,
  total: 0,
  cartAmount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Show CArt
  const [showCart, showCartF] = useState(false);
  const [showCheckOut, showCheckOutF] = useState(false);
  //Toggle Cart function
  function toggleCart() {
    showCartF(!showCart);
  }
  function toggleCheckOut() {
    showCartF(false);
    showCheckOut(!showCheckOut);
  }

  //   Item functions

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  function decrease(id) {
    dispatch({ type: "DECREASE", payload: id });
  }

  //   for the nav cart
  useEffect(() => {
    dispatch({ type: "GETTOTAL" });
  }, [state.Array]);

  // User Address
  const [address, addressF] = useState("");

  function onChange(e) {
    addressF(e.target.value);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        showCart,
        address,
        onChange,
        toggleCart,
        increase,
        decrease,
        showCheckOut,
        toggleCheckOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
