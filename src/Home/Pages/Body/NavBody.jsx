import React from "react";
import Cart from "../../Cart/Cart";
import { useGlobalContext } from "../../Functions/Context";

const NavBody = () => {
  const { toggleCart, cartAmount, cart } = useGlobalContext();

  return (
    <div className="nav">
      <ul>
        <li>
          <a href="#rice">Rice</a>
        </li>
        <li>
          <a href="#swa">Swallow</a>
        </li>
        <li>
          <a href="#soup">Soup</a>
        </li>
        <li>
          <a href="#dri">Drinks</a>
        </li>
      </ul>
      <div className="vc" onClick={toggleCart}>
        Cart({cartAmount})
      </div>
    </div>
  );
};

export default NavBody;
