import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Puzzle1 from './pages/Puzzle1';
import Puzzle2 from './pages/Puzzle2';
import Puzzle3 from './pages/Puzzle3';
import Gift from './pages/Gift';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puzzle1" element={<Puzzle1 />} />
        <Route path="/puzzle2" element={<Puzzle2 />} />
        <Route path="/puzzle3" element={<Puzzle3 />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
