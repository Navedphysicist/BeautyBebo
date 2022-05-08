import React, { useEffect, useState } from "react";

import "./cssstyle.css";
const Cart1 = ({ imgURL, price, name, id, qty }) => {
  const [updatedPrice, setUpdatedPrice] = useState(0);
  const [incQty, setincQty] = useState(qty);
  const handleOnChange = (e,id) => {
    // var updatedPrice = price*e.target.value;
    // console.log(updatedPrice);
    setincQty((incQty) => e.target.value);
    if (e.target.value > 0) {
      setUpdatedPrice((updatedPrice) => price * +(e.target.value));

    } else {
      setUpdatedPrice((updatedPrice) => 0);
    }
    
    let data = JSON.parse(localStorage.getItem("addtocart")) || [];
       data = data.map((el)=>{
         if(el.id==id){
           el.qty=+incQty+1
                  }
         return el
      })  
   

    localStorage.setItem("addtocart", JSON.stringify(data));
    
  };
  console.log(updatedPrice);

  const wishListAddOn = (obj) => {
    let data = [];
    data.push(obj);

    localStorage.setItem("addtowishlist", JSON.stringify(data));
    alert("Item Added To WishList");
  };

  const deleteItemFromCart = (dataid) => {
    let data = JSON.parse(localStorage.getItem("addtocart")) || [];
    data = data.filter((el) => el.id !== dataid);
    localStorage.setItem("addtocart", JSON.stringify(data));
  };

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
              <p>{price}</p>
              <input
                className="itemQtyInput"
                value={incQty}
                type="number"
                // onChange={()=>{qty=incQty}}
                onChange={(e)=>handleOnChange(e,id)}
              />
              <p>${price*qty}</p>
            </div>
          </div>
        </div>
        <div className="horiZontalCartSmall"></div>
      </div>
    </>
  );
};
export default Cart1;
