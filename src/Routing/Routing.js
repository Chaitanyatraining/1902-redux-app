import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Components/Products'
import Product from '../Components/Product'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
        </Routes>
    </div>
  )
}

export default Routing