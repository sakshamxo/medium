import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Stylesheets/Nav.css"
import { ReactComponent as Nel } from '../Assets/Nel.svg'
import { asyncsignout } from '../store/userActions'
import { useDispatch } from 'react-redux'
const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const ToEditor = (e)=>{
      e.preventDefault()
      navigate('/write')
  }
  const menu = React.useRef('null')
  const signoutUser = async (e) => {
    e.preventDefault();
    await dispatch(asyncsignout());
    await navigate('/')
};
  const showmen = ()=>{
    menu.current.style.display = 'initial'
    console.log("open")
  }
  const hidemen = ()=>{
    menu.current.style.display = 'none'
  }
  return (
 <>
 <div ref={menu} className="mainmenu" style={{display:'none'}}>
  <div onClick={hidemen} className="mainma">
  <div className="menu" >
        <div className="stli">
            <div className="item"><Link to="/profile"><i className="ri-user-5-line"></i><h3>Profile</h3></Link></div>
            <div className="item"><Link to="/library"><i className="ri-book-mark-line"></i><h3>Library</h3></Link></div>
            <div className="item"><Link to="/stories"><i className="ri-file-text-line"></i><h3>Stories</h3></Link></div>
        </div>
        <div className="sett">
            <div className="item"><Link to="/setting"><h3>Settings</h3></Link></div>
        </div>
        <div className="signout">
            <div className="item"><Link onClick={signoutUser} to="/"><h3>Signout</h3></Link></div>
        </div>
    </div>
    </div>
    </div>
    <div className="navv">
        <div className="lig">
            <Link to='/home' ><Nel/></Link>
       <input type="text" placeholder="Search Medium"/>
        </div>
        <div className="wri">
            <div className="writ"><Link onClick={ToEditor} to=""><h3><i className="ri-quill-pen-line"></i>Write</h3></Link></div>
            <div className="writ"><Link to=""><i className="ri-notification-2-line"></i></Link></div>
            <div className="writ"><Link onClick={showmen}  to=""><div className="cirp"> <img src="https://images.unsplash.com/photo-1675055477411-31cfa13b4798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/> </div><i className="ri-arrow-drop-down-line"></i></Link></div>
        </div>
    </div>
    </>
  )
}

export default Nav