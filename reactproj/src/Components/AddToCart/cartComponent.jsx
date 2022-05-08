import React from "react";
import "./cssstyle.css";
import Cart1 from "./cartComponent1";
import Cart2 from "./cartComponent2";
import { FirstImageDiv } from "../BBcreamitem/FirstImageDiv";
import NavbarSearch from "../BBcreamitem/NavbarSearch";
import Navbar from "../BBcreamitem/Navbar";
import Footer from "../Footer/Footer";
const Cart = () => {
  var data = JSON.parse(localStorage.getItem("addtocart"))  || []


  console.log(data);
  return (
    <>
     <FirstImageDiv/>
     <NavbarSearch/>
     <Navbar/>
     <div>
        <div className="cartTitle">
          <p>Shopping Cart</p>
        </div>

        <div className="ItemQtyTotal">
          <div>
            <p>ITEM</p>
          </div>
          <div className="PriceQty">
            <p>PRICE</p>
            <p className="Qty">QTY </p>
            <p>SUBTOTAL</p>
          </div>
        </div>
      </div>

      <div className="CartOne">
        <div className="CartOne1">
          {data.map((el) => {
            return <Cart1 key={el.id} {...el} />;
          })}
           <div className="btnShopAndUpdate">
        <button className="btnContinueShopping">CONTINUE SHOPPING</button>
        <button className="btnUpdateShopping" onClick={()=>{window.location.reload()}}>UPDATE SHOPPING CART</button>
        </div>
        </div>
        <div className="CartOne2">
          <Cart2 />
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Cart;
