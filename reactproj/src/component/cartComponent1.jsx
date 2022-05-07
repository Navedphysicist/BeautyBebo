import React, { useEffect, useState } from "react";

import "./cssstyle.css";
const Cart1 = () => {
  const [counter, setCounter] = useState(0);
  let data = JSON.parse(localStorage.getItem("lastname"));
  const handleOnchange = (val) => {
    setCounter(val.target.value * Number(data.price));
  };

  // console.log(data);
  const wishListAddOn = () => {
    alert("Item Added To WishList");
  };
  const deleteItemFromCart = (id) => {};

  return (
    <>
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

      {data.map((user) => (
        <div className="totalContent">
          <div className="horiZontalCart"></div>
          <div className="cartContent">
            <div className="cartImgdiv">
              <img className="cartImg" src={user.img} />
            </div>
            <div className="ProductNameInCart1">
              <div>
                <p className="ProductNameInCart">{user.title}</p>
                <div className="btneditandRemove">
                  <button className="MoveToWishListbtn" onClick={wishListAddOn}>
                    Move to Wishlist
                  </button>
                  <button className="Editbtn">Edit</button>
                  <button
                    className="RemoveItembtn"
                    onClick={deleteItemFromCart}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
              <div className="PriceQty1">
                <p>{user.price}</p>
                <input
                  className="itemQtyInput"
                  type="number"
                  onChange={handleOnchange}
                />
                <p>${counter}</p>
              </div>
            </div>
          </div>
          <div className="horiZontalCartSmall"></div>
        </div>
      ))}
      <div className="btnShopAndUpdate">
        <button className="btnContinueShopping">CONTINUE SHOPPING</button>
        <button className="btnUpdateShopping">UPDATE SHOPPING CART</button>
      </div>
    </>
  );
};
export default Cart1;
