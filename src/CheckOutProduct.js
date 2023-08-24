import React from "react";
import "./CheckOutProduct.css";
import product1 from "../src/photos/product1.avif";

const CheckOutProduct = () => {
  return (
    <div className="checkout_product">
      <img src={product1} alt="" className="checkout_image" />
      <div className="product_info">
        <p className="checkProduct_title">High heavy embroided with crop top</p>
        <p className="checkout_price">
          <small>$</small>
          <strong>12000</strong>
        </p>
        <div className="checkout_product_rating">
            ⭐⭐⭐
        </div>
        <button>Remove basket</button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
