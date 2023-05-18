import React from 'react'
import Logo from '../../assets/nav-logo.svg'
import { FiSearch, FiUser } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { AiOutlineAlignRight } from 'react-icons/ai'
import './navbar.css'
import useModal from '../../hooks/useModal'
import Modal from '../Modal/Modal'
const Navbar = () => {
  const { modalOpen, close, open } = useModal()
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="navbar__links">
        <li className="navbar__link">Bonsai</li>
        <li className="navbar__link">Herbs</li>
        <li className="navbar__link">Sprouts</li>
        <li className="navbar__link">Cactus</li>
        <li className="navbar__link">Flowers</li>
      </nav>
      <ul className="navbar__icons">
        <li
          className="navbar__icon"
          onClick={() => (modalOpen ? close() : open())}
        >
          <FiSearch size={18} />
        </li>
        <li className="navbar__icon">
          <FiUser size={18} />
        </li>
        <li className="navbar__icon">
          <HiOutlineShoppingCart size={18} />
        </li>
        <li className="navbar__icon mobile">
          <AiOutlineAlignRight size={18} />
        </li>
      </ul>
      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </div>
  )
}

export default Navbar
