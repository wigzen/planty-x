import React, { useContext } from 'react'
import './productdetails.css'
import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'
import { toast } from 'react-hot-toast'
import { CartContext } from '../../context/CartProvider'
import { WishContext } from '../../context/WishProvider'

const ProductDetails = ({ product }) => {
  // const { products } = useContext(DataContext)
  // const { productID } = useParams()
  // const product = products.find((ele) => ele._id === productID)
  // console.log(products)
  const { cart, handleCart } = useContext(CartContext)
  const { wishList, handleWishList } = useContext(WishContext)
  function handleAddtoCart(item) {
    const newItem = { ...item, count: 1 }
    if (cart.find((ele) => ele._id === item._id)) {
      handleCart({ type: 'INCREMENT', payload: item._id })
    } else {
      handleCart({ type: 'ADD', payload: newItem })
    }
  }
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
          {!cart?.find((item) => item._id === product._id) ? (
            <button
              onClick={(e) => {
                handleAddtoCart(product)
                toast.success(' Added to Cart ')
                e.stopPropagation()
              }}
              className="card__btn"
            >
              Add to Cart
            </button>
          ) : (
            <button
              className=" card__btn"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <Link to="/cart" role="button">
                Go to Cart
              </Link>
            </button>
          )}
          {!wishList?.find((item) => item._id === product._id) ? (
            <button
              onClick={(e) => {
                handleWishList({ type: 'ADD', payload: product })
                toast.success(' Added to WishList ')
                e.stopPropagation()
              }}
              className="card__btn"
            >
              Add to WishList
            </button>
          ) : (
            <button
              className=" card__btn"
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <Link to="/wishlist" role="button">
                Go to Wishlist
              </Link>
            </button>
          )}
        </div>
        {/* ProductDetails {productID} */}
      </div>
    </div>
  )
}

export default ProductDetails
