import React, { useEffect, useState } from "react";
import "./cssstyle.css";
const Cart1 = ({ imgURL, price, name, id, qty, handleOnChange,deleteItemFromCart }) => {
  const [updatedPrice, setUpdatedPrice] = useState(price * qty);
  // const [incQty, setincQty] = useState(qty);

  const wishListAddOn = (obj) => {
    let data = [];
    data.push(obj);

    localStorage.setItem("addtowishlist", JSON.stringify(data));
    alert("Item Added To WishList");
  };

  // const deleteItemFromCart = (dataid) => {
  //   let data = JSON.parse(localStorage.getItem("addtocart")) || [];
  //   data = data.filter((el) => el.id !== dataid);
  //   localStorage.setItem("addtocart", JSON.stringify(data));
  // };
  // return null;
  return (
    <>
      <div className="totalContent">
        <div className="horiZontalCart"></div>
        <div className="cartContent">
          <div className="cartImgdiv">
            <img className="cartImg" src={imgURL} />
          </div>
          <div className="ProductNameInCart1">
            <div>
              <p className="ProductNameInCart">{name}</p>
              <div className="btneditandRemove">
                <button
                  className="MoveToWishListbtn"
                  onClick={() => {
                    wishListAddOn({ name, id, price, imgURL });
                  }}
                >
                  Move to Wishlist
                </button>
                <button className="Editbtn">Edit</button>
                <button
                  className="RemoveItembtn"
                  onClick={() => deleteItemFromCart(id)}
                >
                  Remove Item
                </button>
              </div>
            </div>
            <div className="PriceQty1">
              <p>&#8377;{price}</p>
              <input
                className="itemQtyInput"
                value={qty}
                type="number"
                onChange={(e) => handleOnChange(e, id)}
              />
              <p>&#8377;{price * qty}</p>
            </div>
          </div>
        </div>
        <div className="horiZontalCartSmall"></div>
      </div>
    </>
  );
};
export default Cart1;
