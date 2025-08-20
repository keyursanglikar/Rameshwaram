import React from 'react'
import navbar from './Navbar.module.css'
import logo from './images/logo.png'


const Navbar = () => {
  return (
    <header>
    <div className={navbar.container}>
        <div className={`${navbar.grid}  ${navbar['navbar-grid']}`}>
             <div className={navbar.logo}> 
            <img 
              src={logo} 
              alt="Company Logo" 
              style={{ height: '50px', width: 'auto' }} 
            />
          </div>
          
            <nav>
                <ul>
                    <li><a href="#" >Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Speciality</a></li>
                    <li><a href="#" className={navbar.contactBtn}>Contact Us</a></li>
                        
                    
                    
                        
                    
                </ul>
            </nav>
            
            
        </div> 
      </div>
    </header>
  )
}

export default Navbar
