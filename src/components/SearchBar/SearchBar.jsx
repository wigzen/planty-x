import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { RxCrossCircled } from 'react-icons/rx'
import { DataContext } from '../../context/DataProvider'
const SearchBar = ({ handleClose }) => {
  const { handleFilters } = useContext(DataContext)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  return (
    <>
      <input
        type="text"
        className="search__bar"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
      <button
        className="btn"
        onClick={() => {
          handleFilters({ type: 'SEARCH', payload: query })
          navigate('/products')
          handleClose()
        }}
      >
        {' '}
        Search{' '}
      </button>
    </>
  )
}

export default SearchBar
