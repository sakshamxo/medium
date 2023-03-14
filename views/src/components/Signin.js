import React from 'react'
import "../Stylesheets/Signin.css"
import Sidebox from './Sidebox'
import Sidenav from './Sidenav'
import Nav from './Nav'
const Signin = () => {
  return (
    <div className="signin">
        <Nav/>
        <div className="signbo">
        <Sidebox/>
        <Sidenav/>
          
        </div>
    </div>
  )
}

export default Signin