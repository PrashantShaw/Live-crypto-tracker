import React from 'react'

import "../styles/nav.css"

const Navbar = () => {
  return (
    <nav className='nav'>
      <img src="images/logo.png" alt='logo' className='logo' />
      <img src="images/middle.png" alt="middle" className='middle' />
      <img src="images/button.png" alt="button" className='button' />
    </nav>
  )
}

export default Navbar