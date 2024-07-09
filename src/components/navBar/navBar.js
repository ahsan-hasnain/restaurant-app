import React from 'react'
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'
export const NavBar = () => {
  return (
    <div className='container p-4'>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <img src={logo} alt='logo' className='img-fluid'/>
            </div>
            <div>
                  <div className='d-flex gap-5 '>
                    <span ><Link to={'/'} className='simple-text link'>HOME</Link></span>
                    <span ><Link to={'/gallery'} className='simple-text link'>GALLERY</Link></span>
                    <span ><Link to={'/about-us'} className='simple-text link'>ABOUT US</Link></span>
                    <span ><Link to={'/contact-us'} className='simple-text link'>CONTACT US</Link></span>
                    <span ><Link to={'/menu'} className='simple-text link'>MENU</Link></span>
                  </div>
            </div>
            <div>
                <button className='primary-button px-5 py-2 YourFont-500 f18'>LOGIN</button>
            </div>
        </div>
    </div>
  )
}
