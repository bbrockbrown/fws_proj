import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
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
