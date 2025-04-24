import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
