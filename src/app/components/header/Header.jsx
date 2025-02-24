import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className='flex flex-col gap-4 items-center md:flex-row md:justify-between md:px-14 md:pt-4 flex-wrap'>
        <Logo/>
        <Navbar/>
    </div>
  )
}

export default Header