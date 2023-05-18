import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import { motion } from 'framer-motion'
const Modal = ({ handleClose }) => {
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
        <p onClick={handleClose}> HEHEH</p>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
