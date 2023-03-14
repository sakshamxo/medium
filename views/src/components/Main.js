import React from 'react'
import Navigation from './Navigation'
import Welcome from './Welcome'
import News from './News'
import Trend from './Trend'
import "../Stylesheets/Main.css"

const Main = () => {
  

  return (
    <div className="main">
         <div className="tit">
 
            <Navigation/>
            <Welcome/>
         </div>
         <News/>
<Trend/>
    </div>
  )
}

export default Main