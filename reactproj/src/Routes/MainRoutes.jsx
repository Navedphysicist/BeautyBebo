import React from 'react'
import {Routes,Route} from "react-router-dom"
import Products from '../Components/BBcreamitem/Products'
import Login from '../Components/login/Login'
import Registration from '../Components/login/Registration'
<<<<<<< Updated upstream
=======
import {Home} from '../Pages/Home'
import {ProductDetail} from '../Pages/ProductDetail'

>>>>>>> Stashed changes
const MainRoutes = () => {
  return (
    <>
    <Routes>
<<<<<<< Updated upstream
        <Route path='/login' element={<Login/>} />
        <Route path='/:id' element={<Products/>} />

       <Route path='/registration' element={<Registration/>} />
        {/* <Route path='/hair' element={<Products/>} /> */}
        {/* <Route path='/eye' element={<Products/>} /> */}
        {/* <Route path='/body' element={<Products/>} />  */}
=======
        <Route index path="/" element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/:id' element={<Products/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path="/product" element={<ProductDetail />} />
>>>>>>> Stashed changes
    </Routes>

    </>
    


  )
}

export default MainRoutes