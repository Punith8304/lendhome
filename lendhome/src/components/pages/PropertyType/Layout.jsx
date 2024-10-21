import React from 'react'
import { Outlet } from 'react-router-dom'
import PropertyDetails from './PropertyDetails'
function Layout() {
  return (
    <div style={{display:"flex"}}>
      <PropertyDetails />
      <Outlet />                                
    </div>
  )
}

export default Layout