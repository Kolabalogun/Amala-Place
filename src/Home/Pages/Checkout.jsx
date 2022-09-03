import React from "react";
import { useGlobalContext } from "../Functions/Context";

const Checkout = () => {
  const { total, toggleCheckOut } = useGlobalContext();

  return (
    <div>
      <div className="cart">
      <div className="carth">
        <h3>Your Cart</h3>
        <p onClick={toggleCheckOut}>close</p>
      </div>
        <div className="checkoutleft">
          <div className="topp">
            <p>Please Enter Descrpition of your Address</p>
            <textarea name="" id="" rows="10"></textarea>
          </div>

          <div className="nav cpy">
            <div className="checkpay">Payment</div>
          </div>

          <div className="below">
            <p>Do you want to pay on Delivery?</p>
            <p style={{ color: "red", fontSize: "12px", fontStyle: "italic" }}>
              *Note
            </p>

            <div className="cart-item">
              <div className="left">
                <h6>Total</h6>
              </div>
              <div className="right">
                <p className="total">#{total}</p>
              </div>
            </div>

            <button className="enter ck">Pay on Delivery</button>
          </div>
        </div>
        <div className="checkoutright">
          <div className="below">
            <p>Pay with Card</p>

            <div className="cart-item">
              <div className="left">
                <h6>Total</h6>
              </div>
              <div className="right">
                <p className="total">#{total}</p>
              </div>
            </div>

            <button className="enter ck">Pay with Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
