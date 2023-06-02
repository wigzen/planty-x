import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { wrap } from 'popmotion'
import './carousel.css'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

const images = [
  'https://images.unsplash.com/photo-1599320092708-8a9dde49fc2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
  'https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
]

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <div className="carousel-bg">
        <section className=" carousel">
          <motion.img
            key={page}
            src={images[imageIndex]}
            className="carousel__img"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          />

          <div className="carousel-control">
            <div className="next" onClick={() => paginate(-1)}>
              <BsArrowLeftCircle size={36} />
            </div>
            <p className="carousel-text">We put everything together</p>
            <div className="prev" onClick={() => paginate(1)}>
              <BsArrowRightCircle size={36} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
