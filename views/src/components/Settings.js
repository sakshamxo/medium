import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../Stylesheets/Settings.css"
import Nav from './Nav'
const Settings = () => {
  const email = useSelector((state) => state.user.user.email);
  console.log(email)
  
  const username = useSelector((state) => state.user.user.name);
  console.log(username)
  const capital = ()=>{
    return username.charAt(0).toUpperCase() + username.slice(1)
  }
  return (
    <>
    <Nav/>
        <div className="setting">
          <div className="set">
    <div className="title"><h1>Settings</h1></div>
    <div className="setbox">
        <div className="option"><Link to=""><div className="oti"><h3>Email</h3></div><div className="odet"><h5>{email}</h5></div></Link></div>
        <div className="option"><Link to=""><div className="oti"><h3>Username</h3></div><div className="odet"><h5>{capital(username)}</h5></div></Link></div>
        <div className="option"><Link to=""><div className="oti"><h3>Profile information</h3><h6>Edit your photo, name, bio, etc.</h6></div><div className="odet"><h5>{capital(username)}</h5><div className="oimg"><img src="https://images.unsplash.com/photo-1677506455248-fcdcbbd004a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" alt=""/></div></div></Link></div>
        <div className="option"><Link to=""><div className="oti"><h3>Delete Account</h3><h6>Permanently delete your account and all of your content.</h6></div></Link></div>
    </div>
    </div>
</div>
</>
  )
}

export default Settings