import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Tech from './components/Tech';
import Achievements from './components/Achievements';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-[100dvh] dark:bg-[#0d1117] dark:text-white">
        
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
