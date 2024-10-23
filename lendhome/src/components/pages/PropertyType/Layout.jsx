import React from 'react'
import { Outlet } from 'react-router-dom'
import PropertyDetails from './PropertyDetails'
import { NextPage } from './PropertyDetails'
function Layout() {
  return (
    <div style={{display:"flex"}}>
      <PropertyDetails />
      <div>
      <Outlet /> 
      <NextPage />  
      </div>
                            
    </div>
  )
}

export default Layout