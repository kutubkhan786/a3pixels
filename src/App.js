import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/index.js';
import NServices from './components/index/New-Service.js';
import Testimonial from './components/index/testimonial.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />}/>
          <Route exact path="/s" element={<NServices />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;