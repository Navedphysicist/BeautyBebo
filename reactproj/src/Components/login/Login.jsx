import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';
import Navbar from "../BBcreamitem/Navbar"


const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    
   

//    let data;
    
//    const getData=async()=>{
    
//     try{
//         let res=await fetch("http://localhost:3000/posts")
//         data= await res.json();
//     }catch(e){
//         console.log(e)
//     }
//  }
    

//     useEffect(()=>{
//      getData();
//      },[])


 const login=async()=>{
    //  let flag = false ;

    //  console.log(data)
    //  data.forEach(el => {
    //      if(email===el.email && password===el.password){
    //          flag = true ;
    //          alert("Login Successful") ;
    //      }
    //  });
    //  if(flag===false){
    //      alert("Invalid Credentials")
    //  }

    try{
        const user= await signInWithEmailAndPassword(auth,email,password)
        console.log(user)

    }catch(error){
        console.log(error.message)
        alert("wrong credentials")
    }




}
        
    


  return (
      
    <div className='login'>
        <Navbar/>
        <div>
          <h3>CUSTOMER LOGIN</h3>
          <div >
          <div className='Laccounts'>
        <div className='fbgaccount1'>
            <img className='image' src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" />
            <button className='fbb'> Sign in with Facebook</button>    
        </div>

        <div className='fbgaccount'>
            <img className='image' src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="" />
           <button className='gb'> Sign in with Google</button>
         </div> 
        </div> 
        <div className='Lor' >
          <h4>--OR--</h4>
        </div>
    </div>
    <div className='logindiv'>
   <div className='form'>
    <form>
        <p>REGISTERED CUSTOMERS</p>
        <hr />
        <p className='loginp' >If you have an account, sign in with your email address.</p>
        <div> 
            <p>Email</p> 
            <input type="text" className='lemail' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <p>Password</p>
            <input type="password" className='lemail' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
      
         <div><input type="button" className='lbutton' value="Sign In" onClick={login} /></div>
         <>Forgot your Password?</>
        
    </form>
    </div>
 
    <div className='rightdiv'>
        <p>NEW CUSTOMERS</p>
        <hr />
        Creating an account has many benefits: check out faster, keep more than one addres,track orders and more.
        <div ><button className='lbutton'>CREATE AN ACCOUNT</button></div>     
    </div>

    </div>
    </div>
    </div>
  )
}

export default Login