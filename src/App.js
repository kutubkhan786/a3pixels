import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/index.js';
import NServices from './components/services/New-Service.js';
import Slider from './components/index/slider.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route exact path="/ss" element={<Slider />}/>
          <Route exact path="/s" element={<NServices />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;