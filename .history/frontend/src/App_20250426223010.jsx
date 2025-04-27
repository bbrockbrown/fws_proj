import React from 'react';

import styled from 'styled-components';

// import Feed from 'common/components/Feed';
import MemberCard from 'common/components/MemberCard';
import SidebarLayout from 'common/components/layouts/SidebarLayout';

import './App.css';
import NavLayout from './common/components/layouts/NavLayout.jsx';

function App() {
  return (
    <div className='App'>
      <NavLayout />
      <SidebarLayout />
      <div className='content' style={{
        display: 'flex',
        flexDirection: 'column',
        paddingRight: '88px',
      }}>
        </div>'
      <MemberCard />
    </div>
  );
}

export default App;

// import React from 'react';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {
//   PrivateRoute,
//   PublicOnlyRoute
// } from './components/routes/ProtectedRoutes';
// import { UserProvider } from './contexts/UserContext';
// import NavLayout from './components/layouts/NavLayout.jsx';
// import './App.css';

// function App() {
//   return (
//     <UserProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<NavLayout/>}>
//             <Route element={<PrivateRoute />}>
//               {/* Pages only for logged in users */}
//             </Route>
//             <Route element={<PublicOnlyRoute />}>
//               {/* Pages for only logged out users */}
//             </Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </UserProvider>
//   );
// }

// export default App;
