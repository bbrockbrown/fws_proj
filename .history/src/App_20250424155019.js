import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import NavLayout from './components/layouts/NavLayout.jsx';
import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavLayout/>}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
