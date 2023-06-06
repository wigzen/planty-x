import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../config/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { toast } from 'react-hot-toast'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [loginDetails, setloginDetails] = useState({ email: '', password: '' })
  const [signupDetails, setsignupDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    c_password: ' ',
  })

  const [addresss, setAddresss] = useState([])
  async function handleLogin(e) {
    // e.preventDefault()
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        loginDetails.email,
        loginDetails.password
      )

      setIslogedIn(true)
      toast.success('Login Done')
      getData()
    } catch (err) {
      toast.error(err.code)

      console.log(err.code)
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
        _id: uuidv4(),
        firstName: signupDetails.firstName,
        lastName: signupDetails.lastName,
        email: signupDetails.email,
        cart: [],
        wishlist: [],
        address: [
          {
            name: `${signupDetails.firstName} ${signupDetails.lastName}`,
            city: 'Toronto',
            country: 'Latina',
            pincode: '500012',
            state: 'Ohio',
            mobile: '8984418719',
            street: '1987,Jerbai Wadia Road ',
          },
        ],
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
      toast.success('Logout Successful')
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
        localStorage.setItem(' userDetails', JSON.stringify(data.data()))
        return data.data()
      })
    } catch (err) {
      // console.log('error hai neche wala')
      console.log(err.code)
    }
  }

  async function addAddress(addressData) {
    const docRef = doc(db, 'users', `${auth.currentUser.uid}`)
    const addressWithId = { ...addressData, _id: uuidv4() }
    setAddresss((prev) => {
      if (prev) {
        return [...prev, addressWithId]
      }
      return [addressWithId]
    })
    await updateDoc(docRef, {
      address: arrayUnion(addressWithId),
    })
    toast.success('Address Added')
  }
  async function removeAddress(addressData) {
    const docRef = doc(db, 'users', `${auth.currentUser.uid}`)

    await updateDoc(docRef, {
      address: arrayRemove(addressData),
    })
    setAddresss(() => addresss.filter((item) => item._id !== addressData._id))
    toast.error('Address Removed')
  }
  async function updateAddress(ID, editedAdd) {
    const newAddress = addresss.map((ele) => {
      if (ele._id === ID) {
        return { ...ele, ...editedAdd }
      } else {
        return ele
      }
    })
    const docRef = doc(db, 'users', `${auth.currentUser.uid}`)
    await updateDoc(docRef, {
      address: newAddress,
    })
    setAddresss(() => newAddress)
    toast.success('Address Updated')
  }
  useEffect(() => {
    if (!addresss.length > 0) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid
          setIslogedIn(true)
          getData()
          console.log(userData.address, addresss, '<-- firebase addres')
          setAddresss(userData.address || [])
          console.log({ uid, status: 'Logedin', user: user })

          // ...
        } else {
          setIslogedIn(false)
          console.log({ status: 'LogedOut' })
        }
      })
      // const token = localdb.getItem('tokenID')
    }
    getData()
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setIslogedIn(true)
        // getData()
        console.log(userData.address, addresss, '<-- firebase addres')
        setAddresss(userData.address || [])
        console.log({ uid, status: 'Logedin', user: user })

        // ...
      } else {
        setIslogedIn(false)
        console.log({ status: 'LogedOut' })
      }
    })
  }, [userData])
  console.log(addresss, '<--address Auth')

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
        removeAddress,
        updateAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
