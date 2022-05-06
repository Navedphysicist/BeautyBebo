import React from 'react'
import {Routes,Route} from "react-router-dom"
import Products from '../Components/BBcreamitem/Products'
const MainRoutes = () => {
  return (
    <>
    <Routes>
        {/* <Route path='/' element={<Products/>} /> */}
        <Route path='/:id' element={<Products/>} />
        {/* <Route path='/skin' element={<Products/>} />
        <Route path='/hair' element={<Products/>} />
        <Route path='/eye' element={<Products/>} />
        <Route path='/body' element={<Products/>} /> */}
    </Routes>

    </>
    


  )
}

export default MainRoutes