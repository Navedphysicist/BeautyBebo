import React from 'react'
import {Routes,Route} from "react-router-dom"
import Products from '../Components/BBcreamitem/Products'
import Login from '../Components/login/Login'
import Registration from '../Components/login/Registration'
import {Home} from '../Pages/Home'
import {ProductDetail} from '../Pages/ProductDetail'
import Cart from "../Components/AddToCart/cartComponent"
import DetailsForm from '../Components/Payment Form/DetailsForm'
import FormSecond from '../Components/Payment Form/FormSecond'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/:id' element={<Products/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/addtocart" element={<Cart/>} />
        <Route path="/checkout" element={<DetailsForm />}/>
        <Route path="/checkout2" element={<FormSecond />}/>
    </Routes>
  
      
    </>
    


  )
}

export default MainRoutes