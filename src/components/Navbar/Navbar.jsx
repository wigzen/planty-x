import React, { useState, useContext } from 'react'
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
const Navbar = () => {
  const { modalOpen: serachOpen, close, open } = useModal()
  const [isSearch, setisSearch] = useState(false)
  const [isFormOpen, setisForm] = useState(false)
  const { handleFilters } = useContext(DataContext)
  const navigate = useNavigate()
  function handleClick(type) {
    handleFilters({ type: 'CATEGORY', payload: '' })
    handleFilters({ type: 'CATEGORY', payload: type })

    navigate('/products')
  }
  // const { modalOpen ,close ,open} = useModal()
  // const {
  //   modalOpen: isloginOpen,
  //   close: loginClose,
  //   open: loginOpen,
  // } = useModal()

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav className="navbar__links">
        <li
          className="navbar__link"
          onClick={() => {
            console.log('hehehe')
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
            handleClick('flower')
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
          <Link to="/wishlist">
            <FiHeart size={18} />
          </Link>
        </li>

        <li className="navbar__icon">
          <Link to="/cart">
            <HiOutlineShoppingCart size={18} />
          </Link>
        </li>
        <li
          className="navbar__icon"
          onClick={() => {
            serachOpen ? close() : open()
            setisForm(true)
            setisSearch(false)
          }}
        >
          {/* <Link to="/auth"> */}
          <FiUser size={18} />
          {/* </Link> */}
        </li>
        <li className="navbar__icon mobile">
          <AiOutlineAlignRight size={18} />
        </li>
      </ul>
      {/* {serachOpen && (
        <Modal
          modalOpen={serachOpen}
          handleClose={close}
          Component={<SearchBar handleClose={close} />}
        ></Modal>
      )} */}

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