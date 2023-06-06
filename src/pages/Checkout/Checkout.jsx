import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartProvider'
import { Link } from 'react-router-dom'
import './checkout.css'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../../components'

import { AuthContext } from '../../context/AuthProvider'
import { Address } from '../../components/Form/Forms'
const Checkout = () => {
  const { modalOpen, close, open } = useModal()
  const { addresss, userData } = useContext(AuthContext)
  const [selectedAddress, setSelectedAddress] = useState(0)

  const { cart } = useContext(CartContext)
  const PRICE = cart.reduce((acc, { price, count }) => count * price + acc, 0)
  const DELIVERY_CHARGE = 50
  const DISCOUNT = PRICE * 0.1
  // console.log(addresss, '<-- checkout address')
  const deliveryAddress = userData.address[selectedAddress] || {
    name: `Vikas Lodh`,
    city: 'Toronto',
    country: 'Latina',
    pincode: '500012',
    state: 'Ohio',
    mobile: '8984418719',
    street: '1987,Jerbai Wadia Road ',
  }
  return (
    <section className="checkout">
      <div className="address">
        <h1 className="checkout__header"> Select Address </h1>
        {addresss.map((ele, index) => {
          return (
            <label className="address__cart">
              <input
                type="radio"
                name="address"
                checked={index == selectedAddress ? true : false}
                value={index}
                onChange={() => {
                  setSelectedAddress(index)
                }}
              />
              <div>
                <p> {ele.name}</p>
                <p>
                  {ele.street} ,{ele.city} - {ele.pincode}
                </p>
                <p>
                  {ele.state} ,{ele.country}
                </p>
                <p> {ele.mobile}</p>
              </div>
            </label>
          )
        })}
        <button
          className="btn"
          onClick={() => {
            modalOpen ? close() : open()
          }}
        >
          + Add Address
        </button>
      </div>
      <div className="order">
        <div className="checkout-card">
          <div className="cart-pricing-card">
            <h3 className="checkout-card__heading">Order Summary</h3>
            <hr />
            {cart.map((ele) => {
              return (
                <div className="price">
                  <div className="text">
                    {ele.name} (<span> {ele.price}</span> X
                    <span>{ele.count}</span>)
                  </div>
                  <div className="value">
                    &#8377; {Math.round(ele.price * ele.count * 100) / 100}
                  </div>
                </div>
              )
            })}
            <hr />
            <div className="sub-price">
              <div className="price">
                <div className="text">
                  Price (<span> {cart.length}</span> <span>items</span>)
                </div>
                <div className="value">
                  &#8377; {Math.round(PRICE * 100) / 100}
                </div>
              </div>
              <div className="price">
                <div className="text">Discount</div>
                <div className="value">
                  - &#8377; {Math.round(DISCOUNT * 100) / 100}
                </div>
              </div>
              <div className="price">
                <div className="text">Delivery Charges</div>
                <div className="value">
                  &#8377; {Math.round(DELIVERY_CHARGE * 100) / 100}
                </div>
              </div>
            </div>
            <hr />
            <div className="total-price">
              <div className="text">Total Amount</div>
              <div className="value">
                &#8377;{' '}
                {Math.round((PRICE + DELIVERY_CHARGE - DISCOUNT) * 100) / 100}
              </div>
            </div>
            <hr />
            <h3 className="checkout-card__heading">Deliver To</h3>
            <hr />
            <div className="checkout-card__address">
              <p> {deliveryAddress.name} </p>
              <p>
                {deliveryAddress.street} ,{deliveryAddress.city} -{' '}
                {deliveryAddress.pincode}{' '}
              </p>
              <p>
                {' '}
                {deliveryAddress.state} ,{deliveryAddress.country}{' '}
              </p>
              <p>{deliveryAddress.mobile}</p>
            </div>

            <Link to="/checkout">
              <button className="cart-checkout-btn">Proceed to payment</button>
            </Link>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          Component={() => <Address />}
        />
      )}
    </section>
  )
}

export default Checkout

// import React from 'react'
//
