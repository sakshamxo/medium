import React from 'react'

const Lib = () => {
  return (
    <div className="lib">
            <div className="libtit"><h1>Your Library</h1><button>New List</button></div>
            <div className="libnav">
                <div className="navme">
                    <a href="">Your lists</a><a href="">Saved lists</a><a href="">Highlights</a>
                </div>
            </div>
            <div className="libpop">
                <div className="popti">
                    <h2>Create a list to easily organize and share stories</h2>
                    <button>Start a list</button>
                </div>
                <div className="popill">
                    <div className="popici">
                        <div className="popcir"><i className="ri-bookmark-line"></i></div>
                    </div>
                </div>
            </div>
            <div className="libred">
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
       
        </div>
  )
}

export default Lib