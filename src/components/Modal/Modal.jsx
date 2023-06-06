import React, { Children, useContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Backdrop from '../Backdrop/Backdrop'
import { motion } from 'framer-motion'
import { RxCrossCircled } from 'react-icons/rx'
import './modal.css'
import { DataContext } from '../../context/DataProvider'
import { useClickOutside } from '../../hooks/useClickOutside'
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
  // const { handleFilters } = useContext(DataContext)
  // const [query, setQuery] = useState('')
  // const navigate = useNavigate()
  // console.log(Component)
  const modalRef = useRef(null)
  useClickOutside(modalRef, handleClose)
  return (
    <Backdrop>
      <motion.div
        ref={modalRef}
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
