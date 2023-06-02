import React, { useContext } from 'react'
import './productdetails.css'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'
const ProductDetails = ({ product }) => {
  // const { products } = useContext(DataContext)
  // const { productID } = useParams()
  // const product = products.find((ele) => ele._id === productID)
  // console.log(products)
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={product.src} alt={product.name} />
      </div>

      <div className="product-card__desc">
        <p className="faded-title">Name</p>
        <p className="product-card__text--big">{product.name}</p>
        <p className="faded-title">Description</p>
        <p className="product-card__text">{product.description}</p>
        <p className="faded-title">Category</p>
        <p className="product-card__text">{product.category}</p>
        <p className="faded-title">Price</p>
        <p className="product-card__text">{product.price}</p>
        <div className="btn-grp">
          <button className="btn"> Add to Cart </button>
          <button className="btn"> Add to Wishlist </button>
        </div>
        {/* ProductDetails {productID} */}
      </div>
    </div>
  )
}

export default ProductDetails
