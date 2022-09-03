import React from "react";
import { useGlobalContext } from "../Functions/Context";

const CartItem = ({ id, name, price, value }) => {
  const { Items } = useGlobalContext();

  let amount = price * value;

  return (
    <>
      {value ? (
        <div className="cart-item">
          <div className="left">
            <h6>{name} </h6>
          </div>
          <div className="right">
            <p className="total">#{price * value}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CartItem;
