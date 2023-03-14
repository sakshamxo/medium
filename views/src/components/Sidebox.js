import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadblogs, asyncloaduser } from '../store/userActions';

const Sidebox = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    console.log(user)
    useEffect(() => {
        dispatch(asyncloaduser())
        dispatch(asyncloadblogs())
    }, [dispatch])
  return (
    <div className="signbox">
                <div className="sigbox">
                    <div id='boxs' className="nee">
                     
                    {user && user.blogs && user.blogs.map((blog)=>( 
             <div className="nem"key={blog._id}
             dangerouslySetInnerHTML={{ __html: blog.data }}> 
           
            
         </div>
             ))}
                       
                    </div>  

                </div>
               
            </div>
  )
}

export default Sidebox