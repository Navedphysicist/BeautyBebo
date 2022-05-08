import React from 'react'
import styles from  './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (<>
    <div className={styles.MainDiv}>
        <div className={styles.UpperDiv}>
            <div>
              <h4>CONTACT INFO</h4>
              <hr className={styles.dashed} />
              <ul className={styles.underline}>
                <li type="none">(+91) 97990 30777</li><br/>
                <li type="none">support@beautybebo.com</li>
                <li type="none">sales@beautybebo.com</li><br/>
                <li type="none">Open time: 10:00AM - 7:00PM</li>
              </ul>
              <div style={{display:"flex"}}>
              <FontAwesomeIcon className={styles.icons} icon={faFacebook} />
              <FontAwesomeIcon className={styles.icons} icon={faInstagram} />
              </div>
            </div>
            <div>
              <h4>QUICK LINKS</h4>
              <hr className={styles.dashed} />
              <ul className={styles.underline}>
                <li type="circle">About Us</li>
                <li type="circle">Contact Us</li>
                <li type="circle">Terms & Conditions</li>
                <li type="circle">Privacy Policy</li>
                <li type="circle">Return and Refund Policy</li>
                <li type="circle">Shipping Policy</li>
              </ul>
            </div>
            <div>
             <h4>CUSTOMER INFO</h4> 
             <hr className={styles.dashed} />
             <ul className={styles.underline}>
                <li type="circle">My Account</li>
                <li type="circle">Track your Order</li>
                <li type="circle">Order Returns</li>
                <li type="circle">Whislist</li>
                <li type="circle">News & Events</li>
                <li type="circle">FAQ</li>
              </ul>
            </div>
            <div>
              <h4>CATEGORIES</h4>
              <hr className={styles.dashed} />
              <ul className={styles.underline}>
                <li type="circle">Makeup</li>
                <li type="circle">Skin</li>
                <li type="circle">Hair</li>
                <li type="circle">Personal Care</li>
                <li type="circle">Mom and Baby Care</li>
                <li type="circle">Fragrance</li>
                <li type="circle">Ayurveda</li>
              </ul>
            </div>
        </div>
        <div className={styles.LowerDiv}>
            <div>
              <div className={styles.setimage}>
                <img src='https://www.beautybebo.com/pub/media/wysiwyg/payment.png' alt=''/>
              </div>    
            </div>
            <div>
              <h3>Signup For Newsletter
                 <input 
                   className={styles.sizing} 
                   type="text" 
                   placeholder='Signup for Newsletter'
                 />
                 <button className={styles.btn}>Subscribe</button>
               </h3>
            </div>
        </div>
        <div className={styles.LowestDiv}>
          <p>© 2020 All Rights Reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Footer


// 