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



import React, { useState } from "react";
import navbar from "./Navbar.module.css";
import logo from "./images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={navbar.container}>
        <div className={navbar["navbar-grid"]}>
          {/* Logo */}
          <div className={navbar.logo}>
            <img src={logo} alt="Company Logo" />
          </div>

          {/* Hamburger Icon */}
          <div className={navbar.hamburger} onClick={toggleMenu}>
            <div className={navbar.bar}></div>
            <div className={navbar.bar}></div>
            <div className={navbar.bar}></div>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`${navbar.navMenu} ${isMenuOpen ? navbar.active : ""}`}
          >
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Speciality</a>
              </li>
              <li>
                <a href="#" className={navbar.contactBtn}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

