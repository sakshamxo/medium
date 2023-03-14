import React from 'react'
import { Link} from 'react-router-dom'
import "../Stylesheets/Sign.css"

const Sign = () => {
 
  
  return (
   



    <div className="naa">
  
        <div className="start">
            <div className="join"><h1>Join Medium.</h1></div>
            <div className="sign">
                <div className="signu">
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button><h3>Submit</h3></button>
                </div>
                <div className="sigi">
                    <h2>Already have an account? <Link href="">Sign in</Link></h2>
                </div>
            </div>
            <div className="terms">
                <h4>Click “Sign Up” to agree to Medium’s <u>Terms of Service </u>  and acknowledge that Medium’s <u>Privacy Policy </u>  applies to you.</h4>
            </div>
        </div>
    </div>

  )
}

export default Sign