import React from 'react';
import styles from './FormSecond.module.css';

const FormSecond = () => {
 
    const shippingData = JSON.parse(localStorage.getItem("paymentData"))||{};
    // const navigate = useNavigate();
    const handlePay = ()=>{
        alert("Payment Successful");
        // navigate("/");
    }

  return (
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
                    <p>Total price {}</p>
                    <hr />
                    <p>GST {}</p>
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
  )
}

export default FormSecond