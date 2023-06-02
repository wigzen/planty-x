import React from 'react'
import Logo from '../../assets/nav-logo.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer__logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav className="footer__links">
          <li className="footer__link">Help</li>
          <li className="footer__link">Contact Us</li>
          <li className="footer__link">Privacy & Terms</li>
        </nav>
        <ul className="footer__icons">
          <li className="footer__icon">
            <FaFacebookF size={18} />
          </li>
          <li className="footer__icon">
            <FaTwitter size={18} />
          </li>
          <li className="footer__icon">
            <FaInstagram size={18} />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
