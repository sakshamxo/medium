import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import "../Stylesheets/Unlim.css"

const Umlim = () => {
  const username = useSelector((state) => state.user.user.name);
  console.log(username)
  const capital = ()=>{
    return username.charAt(0).toUpperCase() + username.slice(1)
  }
  return (
    <div className="profie">
    <div className="acse">
        <button>Get unlimited access</button>
    </div>
    <div className="propi">
        <div className="prope"><img src="https://images.unsplash.com/photo-1675129442916-b8913997b420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt=""/></div>
        <h3>{capital(username)}</h3>
        <Link to="">Edit profile</Link>
    </div>
</div>
  )
}

export default Umlim