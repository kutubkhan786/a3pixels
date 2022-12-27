import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/index.js';
import NServices from './components/index/New-Service.js';
import Testimonials from './components/index/testimonial1.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/t" element={<Testimonials />}/>
          <Route exact path="/s" element={<NServices />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;