import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/index.js';
import NServices from './components/services/New-Service.js';
import NCareer from './components/services/career.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Index />}/>
          <Route path="/services" element={<NServices />} />
          <Route path="/Career" element={<NCareer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;