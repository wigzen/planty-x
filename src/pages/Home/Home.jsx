import React, { useContext } from 'react'
import Heroimg from '../../assets/reflected.png'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import './home.css'
import { Carousel } from '../../components'
import { DataContext } from '../../context/DataProvider'

const bestSellers = [
  {
    src: 'https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    price: '$10.99',
    name: 'Cereus',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1674237276501-595398f90f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80',
    price: '$10.99',
    name: 'Money Plant',
  },
  {
    src: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    price: '$10.99',
    name: ' Snake Plant',
  },

  {
    src: 'https://images.unsplash.com/photo-1615309363679-fed456ff8113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=672&q=80',
    price: '$10.99',
    name: 'Areca Palm',
  },
  {
    src: 'https://images.unsplash.com/photo-1467043198406-dc953a3defa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=729&q=80',
    price: '$12.99',
    name: 'Ficus Bonsai',
  },
]
const Home = () => {
  const { handleFilters } = useContext(DataContext)
  const navigate = useNavigate()
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-header">Best house plants varieties</h1>
          <button
            className="btn"
            onClick={() => {
              handleFilters({ type: 'RESET' })
              navigate('/products')
            }}
          >
            Shop now
          </button>
          <div className="cta">
            <h3>Beautiful living greenery for homes and offices</h3>
            <p>Wer've been mentioned in the press</p>
            <p>
              <span className="bloomberg">
                <b>Bloomberg</b>
                {'  '}
              </span>
              <span className="forbes">Forbes</span>
            </p>
          </div>
        </div>
        <div className="hero-img">
          <img src={Heroimg} alt="plant in vase" />
        </div>
      </section>
      <section className="copy">
        <div className="copy-left">
          <p>
            Each houseplant set is handled quickly and safely before being sent
            to your destination in specially designed insulated packaging.
          </p>
        </div>
        <div className="copy-right">
          <p>
            Learn how ve take care of your plant at every stage of its journey
            from our greenhouse to your home.
          </p>
          <Link to="#" className="link">
            READ MORE{' '}
            <BsArrowRightCircleFill size={18} style={{ margin: '0px 1em' }} />{' '}
          </Link>
        </div>
      </section>
      <Carousel />
      <section className="bestsellers">
        <div className="bestsellers__intro">
          <h4 className="small__heading">OUR SHOP </h4>
          <h2 className="secondary__header">
            Here are the best seller from our varieties
          </h2>
          <div className="btn">See all</div>
        </div>
        <div className="bestsellers__product">
          {bestSellers.map((plant) => {
            return (
              <div className="bestseller__card">
                <div className="bestseller__img">
                  <img src={plant.src} alt={plant.name} />
                </div>
                <div className="bestseller__info">
                  <p>{plant.name}</p>
                  <b>{plant.price}</b>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="review">
        <div>
          <h4 className="small__heading">REVIEWS</h4>
          <p className="review__comment">
            Shop with confidance by reading customer reviews given by
            individuals who have used Bioomey. Excelient quality and streamlined
            service are both offered here.
          </p>
          <div className="stars">
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
            <AiFillStar className="star" />
          </div>
        </div>
        <div>
          <p className="review__text">
            We adore all our friends atBloomey, especially the beauties who have
            come to live with us! Great advice when needed, beautifully and
            safely packaged. Highly recommend, it's just the best place for
            healthy plants and great value!
          </p>

          <hgroup>
            <h4>Pamela S.</h4>
            <small>Lake Forest, CA</small>
          </hgroup>
        </div>
      </section>
      <section className="masonary-grid ">
        <div className="grid-item">
          <img
            src="https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="grid-item">
          <img
            src="https://images.unsplash.com/photo-1589573328372-14f8d45c4aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="second"
          />
        </div>
        <div className="grid-item last">
          <div className="text-box">
            <h4 className="secondary__header">
              Get inspired from our Instagram
            </h4>
            <p>
              If you use the hashtag #bioomey on Instagram, well spotlight you.
            </p>
            <Link className="link">
              Check it out
              <BsArrowRightCircleFill size={18} style={{ margin: '0px 1em' }} />
            </Link>
          </div>
        </div>
      </section>

      <section className="contact">
        <div>
          <p className="secondary__header">
            Stay update with special offers, plant-parenting tips, and more.
          </p>
        </div>
        <div>
          <div className="input__block">
            <input
              type="text"
              placeholder="Your Email"
              className="text__input"
            />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
