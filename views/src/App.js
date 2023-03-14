import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import Main from '../src/components/Main';
import Profile from '../src/components/Profile';
import Library from '../src/components/Library';
import Signin from '../src/components/Signin';
import Stories from '../src/components/Stories';
import 'remixicon/fonts/remixicon.css'
import {
    asyncsignup,
    asyncloaduser,
    asyncsignin,
    asyncsignout,
    asyncloadblogs,
} from "./store/userActions";
import { useDispatch, useSelector } from "react-redux";
import Editor from "./components/Editor";
import Settings from "./components/Settings";
const App = () => {
  
    return (
        <Routes>
        <Route path='/' element={<Main/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/home' element={<Signin/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/stories' element={<Stories/>}/>
          <Route path='/write' element={<Editor/>}/>
          <Route path='/setting' element={<Settings/>}/>
      </Routes>
          
    );
};

export default App;
