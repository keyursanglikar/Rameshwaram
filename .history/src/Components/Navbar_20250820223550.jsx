// import React from 'react'
// import navbar from './Navbar.module.css'
// import logo from './images/logo.png'


// const Navbar = () => {
//   return (
//     <header>
//     <div className={navbar.container}>
//         <div className={`${navbar.grid}  ${navbar['navbar-grid']}`}>
//              <div className={navbar.logo}> 
//             <img 
//               src={logo} 
//               alt="Company Logo" 
//               style={{ height: '50px', width: 'auto' }} 
//             />
//           </div>
          
//             <nav>
//                 <ul>
//                     <li><a href="#" >Home</a></li>
//                     <li><a href="#">About</a></li>
//                     <li><a href="#">Our Speciality</a></li>
//                     <li><a href="#" className={navbar.contactBtn}>Contact Us</a></li>
                        
                    
                    
                        
                    
//                 </ul>
//             </nav>
            
            
//         </div> 
//       </div>
//     </header>
//   )
// }

// export default Navbar




import React, { useState } from 'react';
import navbar from './Navbar.module.css';
import logo from './images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className={navbar.container}>
        {/* Logo */}
        <div className={navbar.logo}>
          <img
            src={logo}
            alt="Company Logo"
            style={{ height: '50px', width: 'auto' }}
          />
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
        <nav className={`${navbar.navLinks} ${isOpen ? navba
