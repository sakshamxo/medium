import React from 'react'
import { Link } from 'react-router-dom'
import Elem from "../Assets/Elem.svg"
const Welcome = () => {
  return (

    <>
    
    <div className="title">
            <div className="titlee">
                <div className="textt">
                    <h1>Stay curious.</h1>
                    <h5>Discover stories, thinking, and expertise from writers on any topic.</h5>
                    <button>Start reading</button>
                </div>
            </div>
            <div className="logo">
              <img src={Elem} alt="" />
            </div>

        </div>
    </>
        
  )
}

export default Welcome