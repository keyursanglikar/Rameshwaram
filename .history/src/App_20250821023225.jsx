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



import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './Components/About'
import SpecialsPage from './Components/Specials'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/menu" element={<me /> */}
        <Route path="/specialties" element={<SpecialsPage/>} />
        <Route path="/contact" element={<Cont} />
      </Routes>
    </Router>
  )
}

export default App