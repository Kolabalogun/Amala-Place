import React, { useState, useEffect } from "react";

import { useGlobalContext } from "../Functions/Context";
import Bottom from "./Body/Bottom";

import Top from "./Body/Top";

const Body = () => {
 

  // Top function
 

  return (
    <div className="main">
      {/*======= Top Section ================== */}
      <Top />
      {/*======= Top Section ================== */}
      {/*======= Bottom Section ================== */}
      <Bottom />
      {/*======= Bottom Section ================== */}
    </div>
  );
};

export default Body;
