import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='bg-[#f1f2ec] sticky z-50 top-0 shadow md:w-full'>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-20">
        <div className='logo font-bold text-black text-2xl cursor-pointer'>
          Mood<span className='text-[#a486f4]'>CheckIn</span>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex gap-4 font-semibold ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-20 left-0 w-full md:w-auto bg-[#f1f2ec] md:bg-transparent`}>
          <li>
            <NavLink
              to="/"
              className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 hover:text-[#9373f2] lg:p-0 cursor-pointer"
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 hover:text-[#9373f2] lg:p-0 cursor-pointer"
              onClick={handleNavLinkClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 hover:text-[#9373f2] lg:p-0 cursor-pointer"
              onClick={handleNavLinkClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
