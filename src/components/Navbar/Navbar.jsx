import React, { useState, useContext, useRef } from 'react'
import Logo from '../../assets/nav-logo.svg'
import { FiSearch, FiUser, FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiOutlineAlignRight } from 'react-icons/ai'
import SearchBar from '../SearchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import Forms from '../Form/Forms'
import { DataContext } from '../../context/DataProvider'
import { AuthContext } from '../../context/AuthProvider'
import { toast } from 'react-hot-toast'
// import { useClickOutside } from '@react-hookz/web'
import { useClickOutside } from '../../hooks/useClickOutside'
const Navbar = () => {
  const { modalOpen: serachOpen, close, open } = useModal()
  const [isSearch, setisSearch] = useState(false)
  const [isFormOpen, setisForm] = useState(false)
  const { handleFilters } = useContext(DataContext)
  const { islogedin } = useContext(AuthContext)
  const navigate = useNavigate()
  const navlinkRef = useRef(null)

  useClickOutside(navlinkRef, () => {
    setOpenMenu(false)
  })
  function handleClick(type) {
    handleFilters({ type: 'RESET' })
    handleFilters({ type: 'CATEGORY', payload: type })

    navigate('/products')
  }
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      {/* <input
        type="checkbox"
        name="menu"
        id="menu"
        // checked={t}
        className="menu__checkbox"
      /> */}
      <nav
        className={openMenu ? 'navbar__links--mobile' : 'navbar__links'}
        ref={navlinkRef}
      >
        <li
          className="navbar__link"
          onClick={() => {
            // console.log('hehehe')
            handleClick('bonsai')
          }}
        >
          Bonsai
        </li>
        <li
          className="navbar__link"
          onClick={() => {
            handleClick('herbs')
          }}
        >
          Herbs
        </li>
        <li
          className="navbar__link"
          onClick={() => {
            handleClick('sprouts')
          }}
        >
          Sprouts
        </li>
        <li
          className="navbar__link"
          onClick={() => {
            handleClick('cactus')
          }}
        >
          Cactus
        </li>
        <li
          className="navbar__link"
          onClick={() => {
            handleClick('flowers')
          }}
        >
          Flowers
        </li>
      </nav>
      <ul className="navbar__icons">
        <li
          className="navbar__icon"
          onClick={() => {
            serachOpen ? close() : open()
            setisSearch(true)
            setisForm(false)
          }}
        >
          <FiSearch size={18} />
        </li>

        <li className="navbar__icon">
          {islogedin ? (
            <Link to="/wishlist">
              <FiHeart size={18} />
            </Link>
          ) : (
            <FiHeart
              size={18}
              onClick={() => {
                toast.error('Please Login')
              }}
            />
          )}
        </li>

        <li className="navbar__icon">
          {islogedin ? (
            <Link to="/cart">
              <HiOutlineShoppingCart size={18} />
            </Link>
          ) : (
            <HiOutlineShoppingCart
              size={18}
              onClick={() => {
                toast.error('Please Login')
              }}
            />
          )}
        </li>
        <li
          className="navbar__icon"
          onClick={() => {
            if (islogedin) {
              navigate('/profile')
            } else {
              serachOpen ? close() : open()
              setisForm(true)
              setisSearch(false)
            }
          }}
        >
          {/* <Link to="/auth"> */}
          <FiUser size={18} />
          {/* </Link> */}
        </li>
        <li className="navbar__icon mobile">
          {/* <label htmlFor="menu"> */}
          <AiOutlineAlignRight
            size={18}
            onClick={() => setOpenMenu(!openMenu)}
          />
          {/* </label> */}
        </li>
      </ul>

      {serachOpen && (
        <Modal
          modalOpen={serachOpen}
          handleClose={close}
          Component={() =>
            isSearch ? <SearchBar handleClose={close} /> : <Forms />
          }
        >
          {/* {isSearch && }
          {isFormOpen && <Forms />} */}
        </Modal>
      )}
    </header>
  )
}

export default Navbar
