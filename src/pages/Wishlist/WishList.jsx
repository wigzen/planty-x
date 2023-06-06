import React, { useContext } from 'react'
import { WishContext } from '../../context/WishProvider'
import { CartContext } from '../../context/CartProvider'
import './wishlist.css'
import Lottie from 'lottie-react'
import { toast } from 'react-hot-toast'
import preloader from '../../assets/preloader.json'
import { Nodata } from '../../components'
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
  console.log(wishList)
  return (
    <>
      <h1 className="page-header"> Wishlist</h1>
      <section className=" wishlist item-contianer ">
        {!wishList.length ? (
          <>
            <Nodata page={'Wishlist'} />
          </>
        ) : (
          <>
            {wishList.map((ele) => {
              return (
                <div className="wishlist-card">
                  <img src={ele.src} alt={ele.name} />
                  <h3>
                    Name:
                    {ele.name}
                  </h3>
                  {/* <p> Descripation: {ele.description}</p> */}
                  <h4>Rating : {ele.ratings}</h4>
                  <h4>Price : {ele.price}</h4>
                  {/* <p>Level: {ele.level}</p> */}
                  <div className="btn-grp">
                    <button
                      className="btn"
                      onClick={() => {
                        handleAddtoCart(ele)
                        toast.success('Added to Cart')
                      }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        handleWishList({ type: 'REMOVE', payload: ele })
                        toast.error('Removed form Wishlist')
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            })}
          </>
        )}
      </section>
    </>
  )
}

export default Wishlist
