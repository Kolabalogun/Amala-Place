import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart";
import Body from "../Pages/Body";
import Checkout from "../Pages/Checkout";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
    </Routes>
  );
};

export default Pages;
