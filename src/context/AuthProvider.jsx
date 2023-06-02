import React, { createContext, useEffect, useState } from 'react'
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../config/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [loginDetails, setloginDetails] = useState({ email: '', password: '' })
  const [signupDetails, setsignupDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [addresss, setAddresss] = useState([])
  async function handleLogin(e) {
    e.preventDefault()
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        loginDetails.email,
        loginDetails.password
      )
      // console.log(response)
      // localdb.setItem('tokenID', response._tokenResponse.idToken)

      //   console.log(Auth?.currentUser)
      setIslogedIn(true)
      getData()
    } catch (err) {
      console.log(err)
    }
  }

  async function handleSignup(e) {
    e.preventDefault()
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        signupDetails.email,
        signupDetails.password
      )
      await setDoc(doc(db, 'users', auth.currentUser.uid), {
        firstName: signupDetails.firstName,
        lastName: signupDetails.lastName,
        email: signupDetails.email,
        cart: [],
        wishlist: [],
        address: [],
      })
      //   collection(db, `users/${Auth.currentUser.uid}/cart`)
      setIslogedIn(true)
      // console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  const [islogedin, setIslogedIn] = useState(false)
  const [userData, setUserData] = useState({})

  const handleLogout = async () => {
    // console.log('start')
    try {
      await signOut(auth)
      setIslogedIn(false)
    } catch (err) {
      console.log(err)
    }
    // console.log(islogedin, Auth.currentUser)
    // console.log('end')
  }

  async function getData() {
    try {
      const data = await getDoc(doc(db, 'users', `${auth.currentUser.uid}`))
      // console.log('Runs')
      // console.log(data.data())
      setUserData(() => {
        return data.data()
      })
      //   localdb.setItem(' userDetails', JSON.stringify(data.data()))
    } catch (err) {
      // console.log('error hai neche wala')
      console.log(err)
    }
  }

  async function addAddress(addressData) {
    const docRef = doc(db, 'users', `${auth.currentUser.uid}`)
    updateDoc(docRef, {
      address: arrayUnion(addressData),
    })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setIslogedIn(true)
        setAddresss(userData.address || [])
        console.log({ uid, status: 'Logedin', userData })
        // ...
      } else {
        setIslogedIn(false)
        console.log({ status: 'LogedOut' })
      }
    })
    // const token = localdb.getItem('tokenID')
    getData()
  }, [userData, islogedin])
  return (
    <AuthContext.Provider
      value={{
        loginDetails,
        setloginDetails,
        signupDetails,
        setsignupDetails,
        handleLogin,
        handleSignup,
        islogedin,
        userData,
        setUserData,
        handleLogout,
        getData,
        addAddress,
        addresss,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
