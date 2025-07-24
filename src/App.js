import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MyTeam from './pages/MyTeam';
import Transfers from './pages/Transfers';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/transfers" element={<Transfers />} />
      </Routes>
    </Router>
  );
}

export default App;