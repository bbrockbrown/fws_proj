import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavLayout from 'common/components/layouts/NavLayout.jsx';
// import {
//   PrivateRoute,
//   PublicOnlyRoute,
// } from './components/routes/ProtectedRoutes';
import { UserProvider } from 'common/contexts/UserContext';
import Home from 'pages/Home';

import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
