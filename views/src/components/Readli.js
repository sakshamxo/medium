import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Readli = () => {
    const username = useSelector((state) => state.user.user.name);
    console.log(username)
    const capital = ()=>{
        return username.charAt(0).toUpperCase() + username.slice(1)
      }
  return (
    <div className="profe">
                <div className="nnam"><h1>{capital(username)}.</h1> <button> <i className="ri-more-fill"></i></button>  </div>
                <div className="men">
                    <div className="homi"><button>Home</button><button>About</button></div>
                    <div className="line"></div>
                </div>
                <div className="readd">
                    <div className="titr">
                        <h1>Reading list</h1>
                        <h6>0 story</h6>
                    </div>
                    <div className="imgbox">
                        <div className="imag"><img src="https://images.unsplash.com/photo-1675154092378-1ca4978ec6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt=""/></div>
                        <div className="imgg"><img src="https://images.unsplash.com/photo-1675154092378-1ca4978ec6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt=""/></div>
                        <div className="imgi"><img src="https://images.unsplash.com/photo-1675154092378-1ca4978ec6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80" alt=""/></div>
                    </div>
                </div>
            </div>
  )
}

export default Readli