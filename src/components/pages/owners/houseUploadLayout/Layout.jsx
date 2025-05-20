// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import PropertyDetails from './PropertyDetails'
// function Layout() {
//   return (
//     <div style={{display:"flex"}}>
//       <PropertyDetails />
//       <div style={{width: "80%"}}>
//       <Outlet /> 
//       </div>
                            
//     </div>
//   )
// }

// export default Layout


import React from 'react';
import { Outlet } from 'react-router-dom';
import PropertyDetails from './PropertyDetails';
import './Layout.css'; // Import the styles

function Layout() {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <PropertyDetails />
      </aside>
      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
