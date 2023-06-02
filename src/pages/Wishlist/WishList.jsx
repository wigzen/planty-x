import React, { useContext } from 'react'
import { WishContext } from '../../context/WishProvider'
import { CartContext } from '../../context/CartProvider'
const Wishlist = () => {
  const { wishList, handleWishList } = useContext(WishContext)
  const { cart, handleCart } = useContext(CartContext)
  function handleAddtoCart(item) {
    const newItem = { ...item, count: 1 }
    if (cart.find((ele) => ele._id === item._id)) {
      handleCart({ type: 'INCREMENT', payload: item._id })
    } else {
      handleCart({ type: 'ADD', payload: newItem })
    }
  }
  return (
    <section className="item-contianer">
      {!wishList ? (
        <p aria-busy="true"> wewe</p>
      ) : (
        wishList.map((ele) => {
          return (
            <div
              style={{
                border: '1px solid black',
                width: '300px',
                padding: '1em',
              }}
            >
              <p>
                Name:
                {ele.name}
              </p>
              <p>Rating : {ele.ratings}</p>
              <p>Price : {ele.price}</p>
              <p>Level: {ele.level}</p>
              <button
                onClick={() => {
                  handleAddtoCart(ele)
                }}
              >
                {' '}
                Add to Cart{' '}
              </button>{' '}
              <button
                onClick={() => {
                  handleWishList({ type: 'REMOVE', payload: ele })
                }}
              >
                {' '}
                Remove{' '}
              </button>
            </div>
          )
        })
      )}
    </section>
  )
}

export default Wishlist
