import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./cssstyle.css";

const Cart2 = () => { 
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("addtocart")) || []
   let totalvalue = data.reduce((acc,el)=>{
     return acc+el.price*el.qty
   },0)
  return (
    <>
      <div className="cartContainer2">
        <div className="CartSummaryTitle">
          <h2>Summary</h2>
        </div>
        <div className="ESTIMATESHIPPINGANDTAX">
          <p>ESTIMATE SHIPPING AND TAX</p>
          <span><i className="fa-solid fa-angle-down"></i></span>
        </div>
        <div>
          <div className="horiLineInCart2"></div>
          <div className="SubTotalIncart2">
            <p>Subtotal </p>
            <p className="priceInCart2">&#8377;{totalvalue}</p>
          </div>
          <div className="horiLineInCart2Small"></div>
        </div>
        <div>
          <div className="SubTotalIncart2">
            <p>Shipping (Best Way - Max 7 Business days) </p>
            <p className="priceInCart2"> &#8377;0</p>
          </div>
          <div className="horiLineInCart2Small"></div>
        </div>
        <div>
          <div className="SubTotalIncart2">
            <p>Order Total Incl. GST </p>
            <p className="priceInCart2"> &#8377;{totalvalue+0}</p>
          </div>
          <div className="horiLineInCart2Small"></div>
        </div>
        <div className="ESTIMATESHIPPINGANDTAX1">
          <p>APPLY DISCOUNT CODE</p>
          <span><i className="fa-solid fa-angle-down"></i></span>
        </div>
        <div className="horiLineInCart2large"></div>
        <div>
          <button className="ESTIMATESHIPPINGANDTAXbtn"  onClick={()=>{navigate('/checkout')}}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart2;
