import React, { Children, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Backdrop from '../Backdrop/Backdrop'
import { motion } from 'framer-motion'
import { RxCrossCircled } from 'react-icons/rx'
import './modal.css'
import { DataContext } from '../../context/DataProvider'
const Modal = ({ handleClose, children, Component }) => {
  const zoom = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  }
  const { handleFilters } = useContext(DataContext)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  console.log(Component)

  return (
    <Backdrop>
      <motion.div
        onClick={(e) => {
          e.stopPropagation()
        }}
        variants={zoom}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="modal"
      >
        <div className="flex__contianer">
          {Component()}
          {/* {children} */}
          {/* <input
            type="text"
            className="search__bar"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
          <div>
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
         
          </div> */}
          <RxCrossCircled
            onClick={handleClose}
            size={'2rem'}
            className="close__btn"
          />
        </div>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
