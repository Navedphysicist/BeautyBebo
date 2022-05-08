import React, { useEffect, useState } from "react";

import "./cssstyle.css";
const Cart1 = ({imgURL,price,name,id}) => {



  const [updatedPrice, setUpdatedPrice] = useState(0);
  const handleOnChange = (e) => {
    // var updatedPrice = price*e.target.value;
    // console.log(updatedPrice);
    if(e.target.value>0){

      setUpdatedPrice((updatedPrice)=>price*e.target.value);
    }
    else{
      setUpdatedPrice((updatedPrice)=>0);
    }
   
  };
  console.log(updatedPrice);

  const wishListAddOn = (obj) => {
   
    let data = []
    data.push(obj);
   
    localStorage.setItem("addtowishlist",JSON.stringify(data))
    alert("Item Added To WishList");
  };

 const deleteItemFromCart = (dataid)=>{
    // data = data.filter((el)=> el.id!==dataid)

  // localStorage.setItem("addtocart",JSON.stringify(data))
 }

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
                  <button className="MoveToWishListbtn" onClick={()=>{wishListAddOn({name,id,price,imgURL})}}>
                    Move to Wishlist
                  </button>
                  <button className="Editbtn">Edit</button>
                  <button
                    className="RemoveItembtn"
                    onClick={()=>deleteItemFromCart(id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
              <div className="PriceQty1">
                <p>{price}</p>
                <input
                  className="itemQtyInput"
                  type="number"
                  onChange={handleOnChange}
                />
                <p>${!updatedPrice ? price : updatedPrice}</p>
              </div>
            </div>
          </div>
          <div className="horiZontalCartSmall"></div>
        </div>
   
      
    </>
  );
};
export default Cart1;
