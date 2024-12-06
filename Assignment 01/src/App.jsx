import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Price from './components/Price';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/price" element={<Price />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App