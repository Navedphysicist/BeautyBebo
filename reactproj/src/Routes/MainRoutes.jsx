import React from 'react'
import {Routes,Route} from "react-router-dom"
import Products from '../Components/BBcreamitem/Products'
import Login from '../Components/login/Login'
import Registration from '../Components/login/Registration'
import {Home} from '../Pages/Home'
import {ProductDetail} from '../Pages/ProductDetail'

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/:id' element={<Products/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path="/product" element={<ProductDetail />} />
    </Routes>

    </>
    


  )
}

export default MainRoutes