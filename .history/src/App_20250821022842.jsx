// import { useState } from 'react'

// import './App.css'
// import Home from './Home'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <Home/>
     
//     </>
//   )
// }

// export default App



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navbar from './Navbar.module.css';
import logo from './images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className={navbar.container}>
        {/* Logo */}
        <div className={navbar.logo}>
          <Link to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="Company Logo"
              style={{ height: '50px', width: 'auto' }}
            />
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={`${navbar.hamburger} ${isOpen ? navbar.active : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className={`${navbar.navLinks} ${isOpen ? navbar.navActive : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/specialties" onClick={closeMenu}>Our Speciality</Link></li>
            <li>
              <Link to="/contact" className={navbar.contactBtn} onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;