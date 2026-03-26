import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Education from './Education';
import Interests from './Interests';   // <-- import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/interests" element={<Interests />} />   {/* new route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;