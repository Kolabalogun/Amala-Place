import React from "react";
import { useGlobalContext } from "../../Functions/Context";

const Top = () => {
  const { address, onChange } = useGlobalContext();

  return (
    <div className="top">
      <div className="caption">
        <h2>Welcome to Eatery Delivery</h2>
        <p>
          Food is a universal experience and Eatery emphasizes this fact
          with the best of African and continental cuisine that would delight
          your tastebuds.
        </p>
      </div>

      <div className="form">
        <img className="svg" src="h.svg" alt="" />
        <input
          type="text"
          className="deli"
          value={address}
          onChange={onChange}
          placeholder="Enter Delivery Address"
        />

        <a href="#bot" className="enter">
          See Menu Below
        </a>
      </div>

      {/* <div className="topright">
        <img src="8.jpg" alt="" />
      </div> */}
    </div>
  );
};

export default Top;
