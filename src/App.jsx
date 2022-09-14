import React from 'react'
import Mission from './components/HomePage/Mission'
import Navbar from './components/HomePage/Navbar'
import Planed from './components/HomePage/Planed'
import Ready from './components/HomePage/Ready'
import Harborcon from './components/HomePage/Harborcon'
import Footer from './components/HomePage/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Planed/>
      <Ready/>
      <Mission/>
      <Harborcon/>
      <Footer/>
    </div>
  )
}

export default App