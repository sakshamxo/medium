import React from 'react'
import "../Stylesheets/Library.css"
import Lib from './Lib'
import Sidenav from './Sidenav'
import Nav from './Nav'
const Library = () => {
  return (
    
        <>
        <Nav/>
      <div className="library">
      <Lib/>
        <div className="rlib">
            <Sidenav/>
        </div>
    </div>
        </>
   
  )
}

export default Library