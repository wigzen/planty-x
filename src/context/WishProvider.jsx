import React, { createContext, useReducer, useContext, useEffect } from 'react'
import { auth, db } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { AuthContext } from './AuthProvider'
export const WishContext = createContext()
function reducer(state, action) {
  if (auth.currentUser) {
    const docRef = doc(db, 'users', `${auth.currentUser.uid}`)

    switch (action.type) {
      case 'SETWISH':
        console.log(action.payload)
        return action.payload
      case 'ADD':
        if (state.find((ele) => ele.id === action.payload.id)) {
          return state
        }
        updateDoc(docRef, {
          wishlist: arrayUnion(action.payload),
        })
        return [...state, action.payload]

      case 'REMOVE':
        updateDoc(docRef, {
          wishlist: arrayRemove(action.payload),
        })
        return state.filter((item) => item._id !== action.payload._id)

      default:
        return state
    }
  }
}
const WishProvider = ({ children }) => {
  const { userData, islogedin } = useContext(AuthContext)

  const [wishList, handleWishList] = useReducer(reducer, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleWishList({ type: 'SETWISH', payload: userData.wishlist || [] })
      } else {
        handleWishList({ type: 'SETWISH', payload: [] })
      }
    })
  }, [userData])
  return (
    <WishContext.Provider value={{ wishList, handleWishList }}>
      {children}
    </WishContext.Provider>
  )
}

export default WishProvider
