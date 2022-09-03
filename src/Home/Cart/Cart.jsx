import React from "react";
import Checkout from "../Pages/Checkout";

import "./style.css";

import { useGlobalContext } from "../Functions/Context";
import CartItem from "./CartItem";

const Cart = () => {
  const { Array, address, toggleCart, total, showCheckOut, toggleCheckOut } =
    useGlobalContext();

  const carts = Array.map((EachItem) => (
    <CartItem
      key={EachItem.id}
      id={EachItem.id}
      name={EachItem.name}
      price={EachItem.price}
      value={EachItem.value}
    />
  ));

  return (
    <div className="cart">
      <div className="carth">
        <h3>Your Cart</h3>
        <p onClick={toggleCart}>close</p>
      </div>

      {carts}

      {total === 0 ? (
        <p style={{ margin: "5px 0px" }}>Your cart is empty</p>
      ) : (
        <div className="cart-item">
          <div className="left">
            <h6>Total</h6>
          </div>
          <div className="right">
            <p className="total">#{total}</p>
          </div>
        </div>
      )}
      {address === "" ? (
        <p style={{ color: "red" }}>Enter Delivery Address</p>
      ) : (
        ""
      )}
      <div className="checkout">
        {total && address && (
          <button onClick={toggleCheckOut} className="enter-cart">
            Proceed to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
