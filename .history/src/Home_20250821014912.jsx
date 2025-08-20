import React from 'react'

import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Menu from './Components/Menu'
import Culinary from './Components/Culinary'
import Specials from './Components/Specials'
import Elegance from './Components/Elegance'
import Voices from './Components/Voices'
import Flavours from './Components/Flavours'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



const Home = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Menu/>
     <Culinary/>
     <Specials/>
     <Elegance/>
     <Voices/>
     <Flavours/>
     <Contact/>
     
     <Footer/>
    </div>
  )
}

export default Home
