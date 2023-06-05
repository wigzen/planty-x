import { Link } from 'react-router-dom'
import './cartprice.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'

const CartPrice = () => {
  const { cart } = useContext(CartContext)
  const PRICE = cart.reduce((acc, { price, count }) => count * price + acc, 0)
  const DELIVERY_CHARGE = 50
  const DISCOUNT = PRICE * 0.1
  return (
    <div className="cart-pricing-card">
      <div className="pricing-card-title">
        <h2>Price Details</h2>
      </div>
      <hr />
      <div className="sub-price">
        <div className="price">
          <div className="text">
            Price (<span> {cart.length}</span> <span>items</span>)
          </div>
          <div className="value">&#8377; {PRICE}</div>
        </div>
        <div className="price">
          <div className="text">Discount</div>
          <div className="value">- &#8377; {DISCOUNT}</div>
        </div>
        <div className="price">
          <div className="text">Delivery Charges</div>
          <div className="value">&#8377; {DELIVERY_CHARGE}</div>
        </div>
      </div>
      <hr />
      <div className="total-price">
        <div className="text">Total Amount</div>
        <div className="value">
          &#8377; {Math.round((PRICE + DELIVERY_CHARGE - DISCOUNT) * 100) / 100}
        </div>
      </div>
      <hr />
      <Link to="/checkout">
        <button className="cart-checkout-btn">checkout</button>
      </Link>
    </div>
  )
}

export default CartPrice
