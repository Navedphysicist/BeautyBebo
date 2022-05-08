import React from 'react';
import styles from './DetailsForm.module.css';


const DetailsForm = () => {
  const initState = {
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    country:"India",
    zipCode:"",
    number: "",
  }

  const [state, setState] = React.useState(initState);
  const paymentData = JSON.parse(localStorage.getItem("paymentData"))||{};

  const handleChange = e => {
    const {name, value} = e.target;
    setState( { ...state, [name]: value} );
  }
  

  const handleSubmit = (event)=>{
    event.preventDefault();
    localStorage.setItem("paymentData",JSON.stringify(state));
    console.log(paymentData);
  }

  return (
    <>
    <div className={styles.parent}>
      <div className={styles.firstChild}>
          <h3>Shipping Address</h3>
          <hr />
        <form onSubmit={handleSubmit}>
          <p>First Name *</p>
          <input type="text" name='firstName' required="true" value={state.firstName} onChange={handleChange}/>
          <p>Last Name *</p>
          <input type="text" name='lastName' required="true" value={state.lastName} onChange={handleChange}/>
          <p>Street Address *</p>
          <input type="text" name='streetAddress' required="true" value={state.streetAddress} onChange={handleChange}/>
          <p>City *</p>
          <select className={styles.select} name="city" required="true" value={state.city} onChange={handleChange}>
              <option value=""></option>
              <option value="Jaipur">Jaipur</option>
              <option value="Jodhpur">Jodhpur</option>
              <option value="Jaislmer">Jaislmer</option>
              <option value="Kota">Kota</option>
          </select>
          <p>State *</p>
          <select className={styles.select} name="state" required="true" value={state.state} onChange={handleChange}>
                  <option value="">please select a region,state or province</option>
                  <option value="Andhra Pardesh">Andhra Pardesh</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Utter Pardesh">Utter Pardesh</option>
                  <option value="Gujrat">Gujrat</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Jammu&Kashmir">Jammu&Kashmir</option>
          </select>        
          <p>ZIP/Postal Code</p>
          <input type="text" name='zipCode' required="true" value={state.zipCode} onChange={handleChange}/>
          <p>Country *</p>
          <select name="country" className={styles.select} required="true" value={state.country} onChange={handleChange}>
                  <option value="India">India</option>
                  <option value="Nepal">Nepal</option>
                  <option value="ShriLanka">ShriLanka</option>
                  <option value="Russia">Russia</option>
                  <option value="Bangladesh">Bangladesh</option>
                </select>
          <p>Phone Number *</p>
          <input type="text" name='number' required="true" value={state.number} onChange={handleChange}/><br />
          <h3>Delivery Charges</h3>
          <hr/>
          <div className={styles.lastData}>
          <input type="radio" value="" className={styles.radio}/>   0.00 
          <p>Max 7 bussiness days</p>
          </div>
          <div className={styles.lastBtn}><input type="submit" className={styles.btn} value={"NEXT"} /></div>
        </form>
      </div>
    </div>
    </>
  )
}

export default DetailsForm
