import React, { useState } from "react";
import styles from "./productDetail.module.css";
const ProductDetail = () => {
  let product = JSON.parse(localStorage.getItem("product"));
  let [quantity, setQuantity] = useState(1);
  let [deliverAval, setDeliverAval] = useState(false);
  const handleQuantity = (value) => {
    setQuantity((prevState) => {
      return prevState + value;
    });
  };
  return (
    <div>
      <div id={styles.mainContainer}>
        <div id={styles.mainImg}>
          <img id={styles.productImage} src={product.imgURL} alt="image" />
        </div>
        <div id={styles.detailDiv}>
          <h3 id={styles.productTitle}>{product.name}</h3>
          <div id={styles.spanDiv}>
            <img
              src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png"
              width="70"
              height="20"
              alt=""
            />
            <span>{Math.floor(Math.random() * 100 + 1)} Reviews</span>
            <span>Add Your Review</span>
          </div>
          <div id={styles.stockDetail}>
            <span>
              <i className="fa-solid fa-check"></i>&nbsp; In stock
            </span>
          </div>
          <div id={styles.stockKeep}>
            <p>
              SKU &nbsp; &nbsp;{" "}
              <span style={{ color: "gray" }}>
                {" "}
                BBJ000{Math.floor(Math.random() * 1000 + 1)}
              </span>
            </p>
          </div>
          <div>
            <strike id={styles.strikePrice}>{product.strikePrice ? product.strikePrice : product.price+500 }</strike>
            <span id={styles.price}>{product.price}</span>
            <span id={styles.discount}>
              {product.strikePrice ? Math.ceil(
                ((product.strikePrice - product.price) / product.strikePrice) *
                  100
              ): ""}
             { product.strikePrice ? `% off` : "" }
            </span>
            <p style={{ color: "gray", fontSize: "12px", margin: "5px" }}>
              (Inclusive of all taxes)
            </p>
          </div>
          <div>
            <p>Brand: {product.brand}</p>
          </div>
          <div id={styles.cartBtn}>
            <label htmlFor="">Qty</label>
            <div id={styles.quantity}>
              <span>
                <i
                  onClick={() => {
                    if (quantity > 1) {
                      handleQuantity(-1);
                    }
                  }}
                  className="fa-solid fa-angle-down"
                ></i>
              </span>
              <input
                type="text"
                value={quantity}
                id={styles.cartQuantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <span>
                <i
                  onClick={() => handleQuantity(1)}
                  className="fa-solid fa-angle-up"
                ></i>
              </span>
            </div>
            <button>
              <i className="fa-solid fa-basket-shopping"></i> Add To Cart
            </button>
            <span id={styles.wishlist}>
              <i className="fa-solid fa-heart"></i>
            </span>
          </div>
          <div id={styles.checkPin}>
            <label>Check Delivery</label>
            <input type="text" placeholder="Zipcode" />
            <button onClick={() => setDeliverAval(true)}>Check</button>
            {deliverAval && (
              <p
                style={{
                  color: "olivedrab",
                  backgroundColor: "beige",
                  padding: "10px",
                  fontSize: "12px",
                  margin: "5px",
                }}
              >
                Delivery Available.
              </p>
            )}
          </div>
          <div id={styles.policy}>
            <ul>
              <li>
                <img
                  src="https://www.beautybebo.com/pub/media/wysiwyg/genuine_product.png"
                  alt=""
                />
                <span>100% Genuine Product</span>
              </li>
              <li>
                <img
                  src="https://www.beautybebo.com/pub/media/wysiwyg/return_product.png"
                  alt=""
                />
                <span>Easy Return Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id={styles.reviewDiv}>
        <div>
          <p>details</p>
          <p>+</p>
        </div>
        <div>
          <p>more information</p>
          <p>+</p>
        </div>
        <div>
          <p>how to use</p>
          <p>+</p>
        </div>
        <div>
          <p>reviews</p>
          <p>+</p>
        </div>
      </div>
    </div>
  );
};

export { ProductDetail };
