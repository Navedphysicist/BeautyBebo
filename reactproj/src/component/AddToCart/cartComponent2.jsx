import React, { Component } from "react";
import "./cssstyle.css";

const Cart2 = () => {
  const fetcha = async () => {
    let rep = await fetch(`http://localhost:3000/posts`);
    let data = await rep.json();
  };

  fetcha();

  return (
    <>
      <div className="cartContainer2">
        <div className="CartSummaryTitle">
          <h2>Summary</h2>
        </div>
        <div className="ESTIMATESHIPPINGANDTAX">
          <p>ESTIMATE SHIPPING AND TAX ˅</p>
        </div>
        <div>
          <div className="horiLineInCart2"></div>
          <div className="SubTotalIncart2">
            <p>Subtotal </p>
            <p className="priceInCart2"> $20</p>
          </div>
          <div className="horiLineInCart2Small"></div>
        </div>
        <div>
          <div className="SubTotalIncart2">
            <p>Shipping (Best Way - Max 7 Business days) </p>
            <p className="priceInCart2"> $0</p>
          </div>
          <div className="horiLineInCart2Small"></div>
        </div>
        <div>
          <div className="SubTotalIncart2">
            <p>Order Total Incl. GST </p>
            <p className="priceInCart2"> $20</p>
          </div>
          <div className="horiLineInCart2Small"></div>
        </div>
        <div className="ESTIMATESHIPPINGANDTAX1">
          <p>APPLY DISCOUNT CODE ˅</p>
        </div>
        <div className="horiLineInCart2large"></div>
        <div>
          <button className="ESTIMATESHIPPINGANDTAXbtn">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart2;
