import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FirstImageDiv } from '../BBcreamitem/FirstImageDiv';
import Navbar from '../BBcreamitem/Navbar';
import NavbarSearch from '../BBcreamitem/NavbarSearch';
import Footer from '../Footer/Footer';



const Registration = () => {

    const [firstname,setFirstName]=useState("")
    const [phone,setPhone]=useState("")
    const [lastname,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
     const navigate = useNavigate();
  
    const handledata=async()=>{

        try{
                   let res=await fetch("http://localhost:8080/users",{
                       method:"POST",
                       headers:{"content-type":"application/json"},
                       body:JSON.stringify({
                           email,
                           password,
                           firstname,
                           lastname
                       })
        
                   })
                   let data=await res.json();
        
               }catch(e){
                   console.log(e)
               }

    }

  
   
    

   const handleSubmit=async(e)=>{
       e.preventDefault();
       
              setEmail("");
              setPassword("")
              console.log(email,password,firstname,lastname,phone)
       
              try{
                  let res=await fetch("http://localhost:8080/users",{
                      method:"POST",
                      headers:{"content-type":"application/json"},
                      body:JSON.stringify({
                          email,
                          password,
                          firstname,
                          lastname
                      })
                     
                  })
                  let data=await res.json();
                  navigate('/login')  
       
              }catch(e){
                  console.log(e)
              }

       











   }

  return (
      <>
    <FirstImageDiv/>
    <NavbarSearch/>
    <Navbar/>
    <div className='Pcontainer'>
    <p>CREATING NEW CUSTOMER ACCOUNT</p>
    <div className='accounts'>
        <div className='fbgaccount1'>
            <img className='image' src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" />
            <button className='fbb'> Sign in with Facebook</button>
             
        </div>
        <div className='fbgaccount'>
            <img className='image' src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="" />
           <div><button className='gb'> Sign in with Google</button></div> 
          
        </div>
    </div>
    <div>
        <h4>--OR--</h4>
    </div>
   
    <div className='reg_container'>
        <div>
        <form className='content'onSubmit={handleSubmit}>
            <p>PERSONAL INFORMATION</p>
            <hr />
            <div className='nameInfo'>
                <div>
                    <h4>First Name</h4>
                    <input type="text" className='ninfo' onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div>
                    <h4>Last Name</h4>
                    <input type="text" className='ninfo' onChange={(e)=>setLastName(e.target.value)} />
                </div>
            </div>
            <input type="checkbox" />Sign Up for Newsletter
            <div >
                <h4>Email</h4>
                <input type="text" className='email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div >
                <h4>Phone</h4>
                <input className='email' type="telephone" onChange={(e)=>setPhone(e.target.value)} pattern={"^[0-9]{10}$"} />
            </div>
            <div>
                <h4>Password</h4>
                <input type="password"className='email' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <h4>Confirm Password</h4>
                <input className='email' type="password" pattern={password} />
            </div>
            <input type="submit" className='button' value="CREATE AN ACCOUNT" onClick={handledata} />
            </form>
        
        </div>
      
       
    </div>

    </div>
    <Footer/>
    </>
  )
}

export default Registration;