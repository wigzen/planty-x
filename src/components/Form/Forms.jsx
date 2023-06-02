import React, { useContext, useEffect, useState } from 'react'
// import { products } from '../../../../Projects/Neog Projects/planty-x/src/backend/db/products'

import { collection, doc, setDoc, getDoc, getDocs } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../../config/firebase'
import { AuthContext } from '../../context/AuthProvider'
// import { AuthContext } from '../context/AuthProvider'
import './form.css'
const SignUp = () => {
  const { handleSignup, signupDetails, setsignupDetails } =
    useContext(AuthContext)

  const collectionRef = collection(db, 'users')

  console.log('signup')

  console.log(signupDetails)

  return (
    <form className="form" onSubmit={handleSignup}>
      <h1 className="form___header"> Signup</h1>
      <label>
        First Name
        <br />
        <input
          type="text"
          onChange={(e) => {
            setsignupDetails((prev) => ({ ...prev, firstName: e.target.value }))
          }}
        />
      </label>

      <label>
        Last Name
        <br />
        <input
          type="text"
          onChange={(e) => {
            setsignupDetails((prev) => ({ ...prev, lastName: e.target.value }))
          }}
        />
      </label>
      <label htmlFor="login__email">
        E-mail <br />
        <input
          type="email"
          id="login__email"
          value={signupDetails.email}
          onChange={(e) => {
            setsignupDetails((prev) => ({ ...prev, email: e.target.value }))
          }}
        />
      </label>
      <label htmlFor="login__password">
        Password
        <br />
        <input
          type="password"
          id="login__password"
          value={signupDetails.password}
          onChange={(e) => {
            setsignupDetails((prev) => ({ ...prev, password: e.target.value }))
          }}
        />
      </label>
      <button className="btn"> Submit</button>
    </form>
  )
}

const Login = () => {
  const { handleLogin, loginDetails, setloginDetails } = useContext(AuthContext)
  return (
    <form className="form" onSubmit={handleLogin}>
      <h1 className="form___header"> Login</h1>
      <label htmlFor="login__email">
        E-mail
        <br />
        <input
          type="email"
          id="login__email"
          value={loginDetails.email}
          onChange={(e) => {
            setloginDetails((prev) => ({ ...prev, email: e.target.value }))
          }}
        />
      </label>
      <label htmlFor="login__password">
        Password
        <br />
        <input
          type="password"
          id="login__password"
          onChange={(e) => {
            setloginDetails((prev) => ({ ...prev, password: e.target.value }))
          }}
        />
      </label>
      <button className="btn"> Submit</button>
    </form>
  )
}

const Forms = () => {
  const { handleLogout, userData, islogedin, getData } = useContext(AuthContext)
  const [login, setlogin] = useState(true)

  useEffect(() => {
    getData()
    // console.log('i runn')
  }, [islogedin])

  console.log(islogedin, 'is user loggedin')
  // userDetails = userData
  return (
    <div className="form ">
      <h1 style={{ background: islogedin ? 'green' : 'red' }}>
        {userData?.firstName}
      </h1>
      {login ? <Login /> : <SignUp />}
      <p
        onClick={() => {
          setlogin((prev) => !prev)
        }}
      >
        {login ? 'signup' : 'login'}
      </p>

      <button
        onClick={handleLogout}
        style={{ background: islogedin ? 'green' : 'red' }}
      >
        {' '}
        Logout
      </button>
    </div>
  )
}

export default Forms
export const Address = () => {
  const { addAddress } = useContext(AuthContext)
  const [addressData, setAddressData] = useState({
    name: '',
    street: '',
    city: '',
    pincode: '',
    state: '',
    country: '',
    mobile: '',
  })
  return (
    <form
      className=" addressForm"
      onSubmit={(e) => {
        e.preventDefault()
        console.log(addressData)
        addAddress(addressData)
      }}
    >
      <h1 className="checkout__header"> Add New Address </h1>
      <label>
        Name
        <input
          type="text"
          onChange={(e) => {
            setAddressData((prev) => ({ ...prev, name: e.target.value }))
          }}
        />
      </label>
      <label>
        Street
        <input
          type="text"
          onChange={(e) => {
            setAddressData((prev) => ({ ...prev, street: e.target.value }))
          }}
        />
      </label>
      <label>
        City
        <input
          type="text"
          onChange={(e) => {
            setAddressData((prev) => ({ ...prev, city: e.target.value }))
          }}
        />
      </label>
      <label>
        Pincode
        <input
          type="text"
          onChange={(e) => {
            setAddressData((prev) => ({ ...prev, pincode: e.target.value }))
          }}
        />
      </label>
      <label>
        State
        <input
          type="text"
          onChange={(e) => {
            setAddressData((prev) => ({ ...prev, state: e.target.value }))
          }}
        />
      </label>
      <label>
        Country
        <input
          type="text"
          onChange={(e) => {
            setAddressData((prev) => ({ ...prev, country: e.target.value }))
          }}
        />
      </label>
      <label>
        Mobile No.
        <input
          type="text"
          onChange={(e) => {
            setAddressData((prev) => ({ ...prev, mobile: e.target.value }))
          }}
        />
      </label>
      <button className="btn"> Add Address</button>
    </form>
  )
}
