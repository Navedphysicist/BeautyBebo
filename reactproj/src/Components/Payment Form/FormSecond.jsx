import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FirstImageDiv } from '../BBcreamitem/FirstImageDiv';
import Navbar from '../BBcreamitem/Navbar';
import NavbarSearch from '../BBcreamitem/NavbarSearch';
import Footer from '../Footer/Footer';
import styles from './FormSecond.module.css';

const FormSecond = () => {
     
    const navigate = useNavigate();
    const shippingData = JSON.parse(localStorage.getItem("paymentData"))||{};
    const data = JSON.parse(localStorage.getItem("addtocart")) || []
     let totalvalue= data.reduce((acc,el)=>{
         return acc+el.price*el.qty;
     },0)

   
    const handlePay = ()=>{
        alert("Payment Successful");
        navigate("/");
    }

  return (
      <>
      <FirstImageDiv/>
      <NavbarSearch/>
      <Navbar/>
    <div className={styles.check}>
        {/* FormSecond */}
        <div className={styles.firstCheck}>
            <input type="radio" /> Cash on delevery
            <hr />
            <br />
            <input type="radio"/> Debit/Credit Card
            <hr />
            <div>
            <button className={styles.btn} onClick={handlePay}>Pay</button>
            </div>
        </div>
        <div className={styles.secondCheck}>
            <div className={styles.cartData}>
                <h2>Order Summary :</h2>
                <hr />
                <div>
                    <p>Total price {totalvalue}</p>
                    <hr />
                    <p>GST {"128"}</p>
                </div>
            </div>
            <br />
            <div className={styles.shippingAddress}>
                <h2>Ship To:</h2>
                <hr />
                <p>{`${shippingData.firstName} ${shippingData.lastName}`}</p>
                <p>{`${shippingData.streetAddress}, ${shippingData.city}, ${shippingData.state}-${shippingData.zipCode}, ${shippingData.country}`}</p>
                <h5>{shippingData.number}</h5>
            </div>
            <br />
            <div className={styles.lastCatch}>
                <h2>Shipping Method :</h2>
                <hr />
                <p>Best Way - Max 7 Business days</p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default FormSecond