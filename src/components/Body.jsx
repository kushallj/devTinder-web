import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
      {/* <Outlet/> any children route of body will render  */}
    </div>
  )
}

export default Body