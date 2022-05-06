import React from 'react'
import {Routes,Route} from "react-router-dom"
import Products from '../Components/BBcreamitem/Products'
import Login from '../Components/login/Login'
import Registration from '../Components/login/Registration'
const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/:id' element={<Products/>} />

       <Route path='/registration' element={<Registration/>} />
        {/* <Route path='/hair' element={<Products/>} /> */}
        {/* <Route path='/eye' element={<Products/>} /> */}
        {/* <Route path='/body' element={<Products/>} />  */}
    </Routes>

    </>
    


  )
}

export default MainRoutes