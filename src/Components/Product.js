import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { add } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'

const Product = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(data)
        setProduct(data)
    }

    const handleAdd = (product) => {
        dispatch(add(product))
    }

  return (
    <div className='container mt-4'>
      {Object.keys(product).length>0 ? (
        <>
          <div className='row'>
              <div className='col-md-6'>
                <img src={product.image} className='img-fluid' alt={product.title} />
              </div>
              <div className='col-md-6'>
                <h4 className='mt-4'>{product.title}</h4>
                <div>
                  <span className='bg-primary text-white px-3'>price: ${product.price}</span>
                </div>
                <div>
                  <h4>{product.category}</h4>
                </div>
                <div>
                  <p>{product.description}</p>
                </div>

                <div>
                  <button className='btn btn-warning'
                  onClick={()=>{handleAdd(product)}}
                  >Add to Cart</button>
                </div>
              </div>
          </div>
        </>
      ) : <p>Loading</p>}
    </div>
  )
}

export default Product