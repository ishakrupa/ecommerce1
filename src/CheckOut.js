import React from "react";
import "./CheckOut.css";
import sale from "../src/photos/sale.avif";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
const CheckOut = () => {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src={sale} alt="" className="checkout_Ad_Image" />
      </div>

      <div>
        <h2 className="checkout_title">Your shopping Basket</h2>
        <CheckOutProduct />
      </div>
      <div className="checkout_right">
<Subtotal/>
      </div>
    </div>
  );
};

export default CheckOut;
