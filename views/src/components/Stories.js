import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Stylesheets/Stories.css"
import Nav from './Nav'
import Sidenav from './Sidenav'
import Editor from './Editor'

const Stories = () => {
    const navigate = useNavigate()
    const ToEditor = (e)=>{
        e.preventDefault()
        navigate('/write')
    }
  return (
    <>
    <Nav />
    <div className="stories">
    <div className="lstory">
        <div className="stitle"><h1>Your stories</h1><div className="sbutton"><button onClick={ToEditor} >Write a story</button></div></div>
        <div className="stitmen"><div className="smenu">
            <Link to="">Drafts</Link><Link to="">Published</Link><Link to="">Responses</Link>
        </div></div>
        <div className="sinfo">
            <h3>You have no drafts. Write a story or read on Medium.</h3>
        </div>
    </div>
    <div className="rstory">
        <Sidenav/>
    </div>
</div>
</>
  )
}

export default Stories