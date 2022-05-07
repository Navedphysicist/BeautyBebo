import React from "react";
import "./cssstyle.css";
import Cart1 from "./cartComponent1";
import Cart2 from "./cartComponent2";
const Cart = () => {
  var data = [
    {
      id: 1,
      title: "FACES CANADA PEACHES N CREAM TINTED MOISTURIZER - LIGHT 01",
      price: 20,
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/5/4/54_2.jpg",
    },
    {
      id: 1,
      title: "Face wash",
      price: 40,
      img: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/1/11_33_3.jpg",
    },
  ];
  localStorage.setItem("lastname", JSON.stringify(data));
  return (
    <>
      <div className="CartOne">
        <div className="CartOne1">
          <Cart1 />
        </div>
        <div className="CartOne2">
          <Cart2 />
        </div>
      </div>
    </>
  );
};
export default Cart;
