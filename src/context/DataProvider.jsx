import React, { createContext, useEffect, useReducer, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
// import { data } from '../data'
const CATEGORY = ['herbs', 'sprouts', 'bonsai', 'flowers', 'cactus']
export const DataContext = createContext()
const initailState = {
  query: '',
  sortFilter: '',
  categoryFilter: [],
  ratingFilter: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, query: action.payload }
    case 'SORT':
      return { ...state, sortFilter: action.payload }
    case 'CATEGORY':
      let newCategory
      if (state.categoryFilter.includes(action.payload)) {
        newCategory = state.categoryFilter.filter((ele) => {
          return ele !== action.payload
        })
      } else {
        newCategory = [...state.categoryFilter, action.payload]
      }
      console.log(newCategory)
      return { ...state, categoryFilter: newCategory }
    case 'RATING':
      console.log(action.payload)
      if (action.payload === 0) {
        return state
      }
      return { ...state, ratingFilter: action.payload }
    case 'RESET':
      return initailState
    default:
      return state
  }
}

const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    let isMounted = true
    setLoader(true)
    async function getData() {
      const ProductsRef = collection(db, 'products')
      const productsSnap = await getDocs(ProductsRef)
      setLoader(false)
      productsSnap.forEach((product) => {
        if (isMounted) {
          setData((prev) => {
            return [...prev, product.data()]
          })
        }
      })
    }

    getData()
    return () => {
      isMounted = false
    }
  }, [])
  const [state, dispatch] = useReducer(reducer, initailState)

  return (
    <>
      <DataContext.Provider
        value={{
          handleFilters: dispatch,
          filters: state,
          products: data,
          loader,
          CATEGORY,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  )
}

export default DataProvider
