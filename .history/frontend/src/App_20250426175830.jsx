import React from 'react';

// import Feed from 'common/components/Feed';
import MemberCard from 'common/components/MemberCard';

import './App.css';
import NavLayout from './common/components/layouts/NavLayout.jsx';

function App() {
  return (
    <div className='App'>
      <NavLayout />
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
