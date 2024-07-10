import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import './navBar.css'
export const NavBar = () => {
  function onClick(pic) {
    document.getElementById("myNav").style.width = "100%";
  }

  function onClose() {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <div className='container p-4'>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <img src={logo} alt='logo' className='img-fluid' />
        </div>
        <div className='d-none d-lg-block'>
          <div className='d-flex gap-5 '>
            <span ><Link to={'/'} className='simple-text link'>HOME</Link></span>
            <span ><Link to={'/gallery'} className='simple-text link'>GALLERY</Link></span>
            <span ><Link to={'/about-us'} className='simple-text link'>ABOUT US</Link></span>
            <span ><Link to={'/contact-us'} className='simple-text link'>CONTACT US</Link></span>
            <span ><Link to={'/menu'} className='simple-text link'>MENU</Link></span>
          </div>
        </div>
        <div>
        <RxHamburgerMenu className='d-block d-lg-none' onClick={onClick}/>
          <button className='primary-button px-5 py-2 YourFont-500 f18 d-none d-lg-block'>LOGIN</button>
        </div>
      </div>
      <div className='d-block d-lg-none'>
        <div id="myNav" className="overlay">
          <span className="closebtn grey f14" style={{ cursor: 'pointer' }} onClick={() => onClose()}>CLOSE</span>
          <div className="overlay-content">
            <div className='d-flex flex-column'>
              <span ><Link to={'/'} className='simple-text link'>HOME</Link></span>
              <span ><Link to={'/gallery'} className='simple-text link'>GALLERY</Link></span>
              <span ><Link to={'/about-us'} className='simple-text link'>ABOUT US</Link></span>
              <span ><Link to={'/contact-us'} className='simple-text link'>CONTACT US</Link></span>
              <span ><Link to={'/menu'} className='simple-text link'>MENU</Link></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
