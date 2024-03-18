import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    console.log(id)
    
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(data)
        setProduct(data)
    }

  return (
    <div>Product</div>
  )
}

export default Product