import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'
import { CartContext } from '../../context/CartProvider'
import { WishContext } from '../../context/WishProvider'
import './product.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useModal } from '../../hooks/useModal'
import { Modal, ProductDetails } from '../../components'
import { toast } from 'react-hot-toast'

const Product = () => {
  const { products, filters, handleFilters } = useContext(DataContext)
  const { cart, handleCart } = useContext(CartContext)
  const { wishList, handleWishList } = useContext(WishContext)
  const [currentProduct, setCurrentProduct] = useState({})
  const [range, setRange] = useState(0)

  const { modalOpen, close, open } = useModal()
  function applyFilters() {
    let updatedData = products
    // SEARCH START
    if (filters.query !== '') {
      updatedData = updatedData.filter((ele) =>
        ele.name.toLowerCase().includes(filters.query.toLowerCase())
      )
    }
    // SEARCH STOP

    // SORT   START
    if (filters.sortFilter !== '') {
      switch (filters.sortFilter) {
        case 'LTH':
          updatedData = updatedData.sort(({ price: a }, { price: b }) => a - b)
          break
        case 'HTL':
          updatedData = updatedData.sort(({ price: a }, { price: b }) => b - a)
          break
        default:
          break
      }
    }
    // SORT   STOP
    // let temp
    // RATING START
    if (filters.ratingFilter !== '') {
      updatedData = updatedData.filter(
        ({ ratings }) => ratings == filters.ratingFilter
      )
    }
    // RATING STOP

    // CATEGORY START
    if (filters.categoryFilter.length > 0) {
      updatedData = updatedData.filter(({ category }) =>
        filters.categoryFilter.includes(category)
      )
    }
    // console.log(updatedData, '<-- Sort')
    // CATEGORY STOP

    return updatedData
  }
  function handleAddtoCart(item) {
    const newItem = { ...item, count: 1 }
    if (cart.find((ele) => ele._id === item._id)) {
      handleCart({ type: 'INCREMENT', payload: item._id })
    } else {
      handleCart({ type: 'ADD', payload: newItem })
    }
  }
  const filteredData = applyFilters()

  return (
    <section className="productPage">
      <div className="filterPanel">
        <a
          href="#"
          role="button"
          onClick={() => {
            handleFilters({ type: 'RESET' })
          }}
        >
          Reset Filters
        </a>
        <b> Rating </b>
        <label htmlFor="">
          <input
            type="range"
            name=""
            id=""
            min={0}
            max={6}
            value={range}
            onChange={(e) => {
              setRange((prev) => e.target.value)
              handleFilters({ type: 'RATING', payload: range })
            }}
          />
        </label>
        <b>Sort</b>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => {
              handleFilters({ type: 'SORT', payload: 'HTL' })
            }}
          />{' '}
          Price High to Low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => {
              handleFilters({ type: 'SORT', payload: 'LTH' })
            }}
          />
          Price Low to High
        </label>
        <b> Level </b>
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={() => {
              handleFilters({ type: 'CATEGORY', payload: 'flowers' })
            }}
          />
          Flowers
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={() => {
              handleFilters({ type: 'CATEGORY', payload: 'herbs' })
            }}
          />
          Herbs
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={() => {
              handleFilters({ type: 'CATEGORY', payload: 'cactus' })
            }}
          />
          Cactus
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={() => {
              handleFilters({ type: 'CATEGORY', payload: 'bonsai' })
            }}
          />
          Bonsai
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            onChange={() => {
              handleFilters({ type: 'CATEGORY', payload: 'sprouts' })
            }}
          />
          Sprouts
        </label>
      </div>
      <div className="item-contianer">
        {!filteredData ? (
          <p>loading</p>
        ) : (
          filteredData.map((ele) => {
            return (
              <div
                className="card"
                onClick={() => {
                  setCurrentProduct(ele)
                  modalOpen ? close() : open()
                  // navigate(`/products/${ele._id}`)
                }}
              >
                <div className="first-content">
                  <img src={ele?.src} alt={ele.name} className="product__img" />
                  <b>{ele.name}</b>
                  <div className="flex">
                    {new Array(5)
                      .fill(0)
                      .map((_, index) =>
                        index < ele.ratings ? (
                          <AiFillStar className="star" size={'1.5em'} />
                        ) : (
                          <AiOutlineStar className="star" size={'1.5em'} />
                        )
                      )}
                  </div>
                  {/* <p>Rating : {ele.ratings}</p> */}
                  <p>Price : {ele.price}</p>
                  <p>Category: {ele.category}</p>
                </div>
                <div className="second-content">
                  {!cart?.find((item) => item._id === ele._id) ? (
                    <button
                      onClick={(e) => {
                        handleAddtoCart(ele)
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
                  <br />
                  {!wishList?.find((item) => item._id === ele._id) ? (
                    <button
                      onClick={(e) => {
                        handleWishList({ type: 'ADD', payload: ele })
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
              </div>
            )
          })
        )}
      </div>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          Component={() => <ProductDetails product={currentProduct} />}
        />
      )}
    </section>
  )
}

export default Product
