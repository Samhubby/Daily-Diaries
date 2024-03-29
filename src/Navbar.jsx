import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-600 px-7 py-3 flex justify-between items-center text-white'>
        <span className='text-3xl cursor-pointer'><Link to='/'>Daily Diaries</Link></span>
        <span className='text-xl cursor-pointer hover:text-gray-300'><Link to='/aboutus'>About Us</Link></span>
    </nav>
  )
}

export default Navbar