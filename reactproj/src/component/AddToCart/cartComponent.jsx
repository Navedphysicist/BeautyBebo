import React from "react";
import "./cssstyle.css";
import Cart1 from "./cartComponent1";
import Cart2 from "./cartComponent2";
const Cart = () => {
  var data = JSON.parse(localStorage.getItem("addtocart"))  || []


  console.log(data);
  return (
    <>
      <div className="CartOne">
        <div className="CartOne1">
          {data.map((el) => {
            return <Cart1 key={el.id} {...el} />;
          })}
           <div className="btnShopAndUpdate">
        <button className="btnContinueShopping">CONTINUE SHOPPING</button>
        <button className="btnUpdateShopping">UPDATE SHOPPING CART</button>
        </div>
        </div>
        <div className="CartOne2">
          <Cart2 />
        </div>
      </div>
    </>
  );
};
export default Cart;
