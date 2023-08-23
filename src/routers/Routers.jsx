import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Productdetail from '../pages/Productdetail'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function Routers() {

    return(
        <Routes>
            <Route path='/' element={<Navigate to='home'/>}></Route>
            <Route path='home' element={<Home/>}></Route>
            <Route path='shop' element={<Shop/>}></Route>
            <Route path='shop/:id' element={<Productdetail/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
            
            <Route path='/*'>

            </Route>

            <Route path='login' element={<Login/>}></Route>
            <Route path='signup' element={<Signup/>}></Route>
        </Routes>
    )

}

export default Routers