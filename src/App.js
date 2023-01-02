import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/index.js';
import NServices from './components/services/New-Service.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Index />}/>
          <Route path="/services" element={<NServices />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;