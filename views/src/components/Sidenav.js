import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncloadstories, asyncloaduser } from '../store/userActions';
import "../Stylesheets/Signin.css"

const Sidenav = () => {
    const user = useSelector((state) => state.user);
    console.log(user)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(asyncloadstories())
     dispatch(asyncloaduser())
    }, [dispatch])
    const navigate = useNavigate()
    const writeClick = ()=>{
        navigate('/write')
    }
  return (
    <div className="sidenav">
    <div className="newsnav">
        <div className="head"><h3>Your Stories</h3></div>
        {user && user.stories && user.stories.map((Story)=>(  <div className="newsmid"key={Story._id}
        dangerouslySetInnerHTML={{ __html: Story.data }} >
      </div> ))}
       
     

        <div className="newslist">
            <a href=""><h6>See the full list
            </h6></a>
        </div>
    </div>
    <div className="writenav">
        <div className="heaad"><h3>Writing on Medium</h3></div>
        <div className="linkbox">
            <a href="">New writer FAQ</a><a href="">Expert writing advice</a><a href="">Grow your readership</a>
        </div>
        <button onClick={writeClick} className="boxlet">Start Writing</button>
    </div>

    <div className="recentnav">
        <div className="heaad"><h3>Recently saved</h3></div>
        <div className="rece">  
            <div className="neshead">
            <div className="dp"><img src="https://images.unsplash.com/photo-1675871246994-e48d17bd8df5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80" alt=""/></div>
            <div className="dpname">
                <a href="">
                <h5>
                L.A. Justice
                in
                Case For The 1619 Project</h5></a>
            </div>
        </div>
        <div className="headline"><a href=""><h3>The ZORA Canon: 100 Best Books by African American Women Authors</h3></a></div>
    </div>
       
        <div className="newfe"><a href="">See all (2)</a></div>
    </div>
</div>
  )
}

export default Sidenav