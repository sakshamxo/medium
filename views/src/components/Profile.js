import React from 'react'
import "../Stylesheets/Profile.css"
import Nav from './Nav'
import Readli from './Readli'
import Umlim from './Umlim'
const Profile = () => {
  return (
    <div className="min">
        <Nav/>
    <div className="profi">
    <Readli/>
    <Umlim/>
    </div>
    </div>
  )
}

export default Profile