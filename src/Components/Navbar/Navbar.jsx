import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-[#f1f2ec] sticky z-50 top-0 shadow'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-20 sticky">
        <div className='logo font-bold text-black text-2xl px-15'>
          <span></span>
          Mood
          <span className='text-[#a486f4]'>CheckIn</span>
        </div>
        <ul className='flex gap-4 font-semibold'>
          <li>
            <NavLink
              to="/"
              className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#9373f2] lg:p-0"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#9373f2] lg:p-0"
            >
              About
            </NavLink>
          </li>

         

          <li>
            <NavLink
              to="/Contact"
              className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#9373f2] lg:p-0"
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
