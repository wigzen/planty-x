import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartProvider'
import { WishContext } from '../../context/WishProvider'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { RxCrossCircled } from 'react-icons/rx'

import './cart.css'
import { CartPrice } from '../../components'
const Cart = () => {
  const { cart, handleCart } = useContext(CartContext)
  const { wishList, handleWishList } = useContext(WishContext)

  // const price = cart.reduce((acc, { price, count }) => {
  //   return price * count + acc
  // }, 0)
  // const discount = 0

  console.log(cart)
  return (
    <section className="cartpage">
      <section className="cart-contianer">
        {!cart ? (
          <p>Loading</p>
        ) : (
          cart.map((ele) => {
            return (
              <div className="cart_card">
                <RxCrossCircled
                  size={'2rem'}
                  className="close__btn"
                  onClick={() => {
                    handleCart({ type: 'REMOVE', payload: ele })
                  }}
                />
                <img
                  src={ele.src}
                  alt={ele.name}
                  className="cart_card__img"
                  // style={{ w_idth: '200px', aspectRatio: '1/1' }}
                />
                <div>
                  <h3 className="cart_card__heading">
                    Name:
                    {ele.name}
                  </h3>
                  <p className="cart_card__desc">{ele.description}</p>
                  <div>
                    {new Array(5)
                      .fill(0)
                      .map((_, index) =>
                        index < ele.ratings ? (
                          <AiFillStar className="star" />
                        ) : (
                          <AiOutlineStar className="star" />
                        )
                      )}
                  </div>
                  <p className="cart_card__price">Price : {ele.price}</p>
                  <p>Category: {ele.category}</p>
                  <div className="cart_card__btns">
                    <button
                      className="cart_card__btn--small"
                      onClick={(e) => {
                        e.stopPropagation()

                        handleCart({ type: 'DECREMENT', payload: ele._id })
                      }}
                    >
                      -
                    </button>
                    <p className="cart_card__count"> {ele.count}</p>
                    <button
                      className="cart_card__btn--small"
                      onClick={(e) => {
                        e.stopPropagation()

                        handleCart({ type: 'INCREMENT', payload: ele._id })
                      }}
                    >
                      +
                    </button>
                  </div>
                  {/* <br /> */}
                  {!wishList.find((item) => item._id === ele._id) ? (
                    <button
                      onClick={() => {
                        handleWishList({ type: 'ADD', payload: ele })
                        handleCart({ type: 'REMOVE', payload: ele })
                      }}
                      className="cart_card__btn"
                    >
                      Add to WishList
                    </button>
                  ) : (
                    <button className="cart_card__btn">
                      {' '}
                      <Link to="/wishlist"> Go to Wishlist </Link>
                    </button>
                  )}{' '}
                </div>
              </div>
            )
          })
        )}
      </section>
      {!cart || (
        <div className="cart__details">
          <CartPrice />
        </div>
      )}
    </section>
  )
}

export default Cart
