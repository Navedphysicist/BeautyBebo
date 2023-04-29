import React, { useState } from "react";
import "./cssstyle.css";
import Cart1 from "./cartComponent1";
import Cart2 from "./cartComponent2";
import { FirstImageDiv } from "../BBcreamitem/FirstImageDiv";
import NavbarSearch from "../BBcreamitem/NavbarSearch";
import Navbar from "../BBcreamitem/Navbar";
import Footer from "../Footer/Footer";
const Cart = () => {
  // var data = JSON.parse(localStorage.getItem("addtocart")) || [];
  let [data, setData] = useState(JSON.parse(localStorage.getItem("addtocart")));
  const handleOnChange = (e, id) => {
    data.find((item) => {
      if (item.id === id) {
        item.qty = +e.target.value;
        return true;
      }
    });
    localStorage.setItem("addtocart", JSON.stringify(data));
    setData((prevState) => {
      return [...prevState];
    });
  };
  const deleteItemFromCart = (dataid) => {
    let data = JSON.parse(localStorage.getItem("addtocart")) || [];
    data = data.filter((el) => el.id !== dataid);
    setData(data);
    localStorage.setItem("addtocart", JSON.stringify(data));
  };
  return (
    <>
      <FirstImageDiv />
      <NavbarSearch />
      <Navbar />
      <div id="monishContainer">
        <div className="cartTitle">
          <p>SHOPPING CART</p>
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
        <div className="CartOne">
          <div className="CartOne1">
            {data.map((el) => {
              return <Cart1 key={el.id} {...el} handleOnChange={handleOnChange} deleteItemFromCart={deleteItemFromCart} />;
            })}
            <div className="btnShopAndUpdate">
              <button className="btnContinueShopping">CONTINUE SHOPPING</button>
              <button className="btnUpdateShopping" onClick={() => { window.location.reload() }}>UPDATE SHOPPING CART</button>
            </div>
          </div>
          <div className="CartOne2">
            <Cart2 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cart;
