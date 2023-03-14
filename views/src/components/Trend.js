import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncloadblogs,asyncloaduser } from '../store/userActions'
const Trend = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    console.log(user)
    const usern = useSelector((state) => state.user.blogs);
    console.log(usern)
    useEffect(() => {
        dispatch(asyncloaduser())
        dispatch(asyncloadblogs())
    }, [dispatch])
  return (
    <div className="news">
    <div className="bord">
        <div className="borr">
          
        
             <div className="nee" >
             {user && user.blogs && user.blogs.map((blog)=>( 
             <div className="nem"key={blog._id}
             dangerouslySetInnerHTML={{ __html: blog.data }}> 
           
            
         </div>
             ))}
         </div>  
        
           
        </div>
        
      
    </div>
    <hr />
    {/* {user &&
                user.blogs &&
                user.blogs.map((blog) => (
                    <div
                        key={blog._id}
                        dangerouslySetInnerHTML={{ __html: blog.data }}
                    >

                    </div>
                ))} */}
</div>
  )
}

export default Trend