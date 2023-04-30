import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import "../styles/nav.css"
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return <>
    <nav className='nav'>
      <img src="images/logo.png" alt='logo' className='logo' />
      <img src="images/middle.png" alt="middle" className='middle' />
      <img src="images/button.png" alt="button" className='button' />
    </nav>
    <nav className='hamberger-menu-wrapper'>
      <GiHamburgerMenu
        className='humberger-icon'
        onClick={() => setShowMenu(true)}
      />
      <img src="images/logo.png" alt='logo' className='logo' />
      <div className={`hamberger-menu ${showMenu ? 'active' : ''}`}>
        <p className='selected-tab'>Trade</p>
        <p>Earn</p>
        <p>Support</p>
        <p>About</p>
        <img src="images/button.png" alt="button" className='button ham-btn' />
      </div>
      {/* <RxCross2 className='cross-icon menu' onClick={() => { }} /> */}
      <RxCross2 className={`cross-icon menu ${showMenu ? 'show' : ''}`} onClick={() => { setShowMenu(false) }} />
    </nav>
  </>
}

export default Navbar