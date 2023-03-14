
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Log } from '../Assets/Log.svg'
import { toast } from "react-toastify";
import axios from 'axios';
import "../Stylesheets/Main.css";
import {
  asyncsignup,
  asyncloaduser,
  asyncsignin,
  asyncsignout,
  asyncloadblogs,
} from "../store/userActions";
import { useDispatch, useSelector } from "react-redux";


const Navigation = () => {
  const toastup = ()=> toast('Account Created')
  const toastoff = ()=> toast('Empty field or name and username should be at 4 characters')
  const toastem = ()=> toast('Wrong Credentials')
  const toastin = ()=> toast('Signed in')
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const isAuth = useSelector((state)=> state.user.isAuthenticated)
//   const Gohome = (e)=>{
//     e.preventDefault()
//     navigate('/home')
//   }
useEffect(() => {
  dispatch(asyncloaduser());
}, []);
const [name, setname] = useState('')
const [username, setusername] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')

const Signup = async (e)=>{
  e.preventDefault()
 
 if(email.trim().length > 4 || password.trim().length > 4){
    const signedup = {
      name,
      username,
      email,
      password,
    }
    dispatch(asyncsignup(signedup))
    console.log(signedup)
        toastup()
       
  }
  else if(name.trim().length === 0 || username.trim().length  === 0 || email.trim().length  === 0 || password.trim().length  === 0){
    toastoff()
  }
  else{
    toastoff()
  }

}
const Signin = async (e)=>{
  e.preventDefault()
  if(email.trim().length > 4 || password.trim().length > 4){

    const signedin = {
      email,
      password,
    }
  dispatch(asyncsignin(signedin))
  console.log(signedin)
  if(isAuth === true){
    toastin()
    navigate('/home')
  }
  else{
    toastem()
    navigate('/')
  }
  }
  else if(email.trim().length  === 0 || password.trim().length  === 0){
    toastem()
  }
  else{
    toastem()
  }
    
}

  const son = React.useRef(null)
  const Signsho = ()=>{
    son.current.style.display = 'initial'
    // console.log(sin.current.style)
  }
  const Signof = ()=>{
    son.current.style.display = 'none'
    // console.log(sin.current.style)
  }
    const sin = React.useRef(null)
    const Signshow = ()=>{
      sin.current.style.display = 'initial'
      // console.log(sin.current.style)
    }
    const Signoff = ()=>{
      sin.current.style.display = 'none'
      // console.log(sin.current.style)
    }

    const Showsignin = ()=>{
      son.current.style.display = 'initial';
      sin.current.style.display = 'none'
    }
    const Showsignup = ()=>{
      sin.current.style.display = 'initial';
      son.current.style.display = 'none'
    }
 
  return (
  <>
   <div className="naa" ref={sin} style={{display:'none'}}>
  <div onClick={Signoff} className="maa"></div>
  <div className="start">
      <div className="join"><h1>Join Medium.</h1></div>
      <div className="sign">
          <div className="signu">
            <form onSubmit={Signup}>
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="text" placeholder="Username" value={username} onChange={(e)=>setusername(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button type='submit' ><h3>Sign up</h3></button>
            </form>
          </div>
          <div className="sigi">
              <h2>Already have an account? <Link onClick={Showsignin} href="">Sign in</Link></h2>
          </div>
      </div>
      <div className="terms">
          <h4>Click “Sign Up” to agree to Medium’s <u>Terms of Service </u>  and acknowledge that Medium’s <u>Privacy Policy </u>  applies to you.</h4>
      </div>
  </div>
</div>
<div className="naa" ref={son} style={{display:'none'}}>
  <div onClick={Signof} className="maa"></div>
  <div className="start">
      <div className="join"><h1>Welcome back.</h1></div>
      <div className="sign">
          <div className="signu">
            <form onSubmit={Signin} >
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <button type='submit' ><h3>Sign in</h3></button>
            </form>
          </div>
          <div className="sigi">
              <h2>No account? <Link onClick={Showsignup}>Create one</Link></h2>
          </div>
      </div>
      <div className="terms">
          <h4>Click “Sign In” to agree to Medium’s <u>Terms of Service </u>  and acknowledge that Medium’s <u>Privacy Policy </u>  applies to you.</h4>
      </div>
  </div>
</div>
   {/* <Sign ref={sin}/> */}
    <div className="nav">
    <div className="log">
    <Log/>
    </div>
    <div className="links">
        <Link to="">Our Story</Link><Link to="">Membership</Link><Link to="">Write</Link><Link onClick={Signsho} to="">Sign In</Link>
        <button onClick={Signshow} ><Link >Get Started</Link></button>
    </div>
</div>
  </>


  )

  }
export default Navigation