import React from "react";
import Cart from "../../Cart/Cart";
import { useGlobalContext } from "../../Functions/Context";
import Checkout from "../Checkout";
import Dishes from "./Dishes";
import NavBody from "./NavBody";

const Bottom = () => {
  const { showCart, showCheckOut } = useGlobalContext();

  return (
    <div className="bottom" id="bot">
      {/* NavBar  */}
      <NavBody />
      {/* NavBar  */}
      <div className="search">
        <div className="se">
          <img src="3.svg" className="searchicon" alt="" />
          <input type="text" className="searchh" placeholder="Search" />
        </div>
      </div>

      <div className="menu">
        <Dishes />
      </div>

      {showCart && <Cart />}
      {showCheckOut && <Checkout />}
    </div>
  );
};

export default Bottom;
