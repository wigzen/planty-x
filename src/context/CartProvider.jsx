import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { AuthContext } from './AuthProvider'
import { auth, db } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
export const CartContext = createContext()

function reducer(state, action) {
  if (auth.currentUser) {
    const docRef = doc(db, 'users', `${auth.currentUser.uid}`)
    switch (action.type) {
      case 'SETCART':
        // console.log(action.payload)
        return action.payload

      case 'INCREMENT':
        // console.log('increment run')

        const newCart = state.map((item) =>
          item._id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        )
        updateDoc(docRef, {
          cart: [...newCart],
        })
        return newCart
      case 'DECREMENT':
        {
          // console.log('decrement run')
          const newCart = state.map((item) =>
            item._id === action.payload && item.count > 0
              ? { ...item, count: item.count-- }
              : item
          )
          updateDoc(docRef, {
            cart: [...newCart],
          })
          return newCart
        }
        break

      case 'ADD':
        updateDoc(docRef, {
          cart: arrayUnion(action.payload),
        })
        return [...state, action.payload]

      case 'REMOVE':
        // console.log(action.payload)
        updateDoc(docRef, {
          cart: arrayRemove(action.payload),
        })
        return state.filter((item) => item._id !== action.payload._id)

      default:
        return state
    }
  }
}
const CartProvider = ({ children }) => {
  const { userData, islogedin } = useContext(AuthContext)

  const [cart, handleCart] = useReducer(reducer, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleCart({ type: 'SETCART', payload: userData.cart || [] })
      } else {
        handleCart({ type: 'SETCART', payload: [] })
      }
    })
  }, [userData])
  return (
    <CartContext.Provider value={{ cart, handleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
