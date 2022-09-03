import React from "react";
import { useGlobalContext } from "../Functions/Context";

const Item = ({ id, name, price, value }) => {
  const { increase, decrease } = useGlobalContext();

  return (
    // <div className="cart-item">
    <div className="item">
      <div className="left">
        <h6>{name}</h6>
        <p className="price">#{price}</p>
      </div>
      <div className="right">
        <button onClick={() => increase(id)}>+</button>
        <h3>{value}</h3>
        <button onClick={() => decrease(id)}>-</button>
      </div>
    </div>
    // </div>
  );
};

export default Item;
