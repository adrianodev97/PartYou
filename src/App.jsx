import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Login from "./pages/Login"
import Presentation from "./pages/Presentation";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/userSlice";
import { selectUser } from "./redux/userSlice";

import { fb } from "./db/firebase";

const App = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch() 

  useEffect(() => {
    fb.auth.on().then((user) => {
      if(!!user){
        dispatch(login({
          email: user.email,
          id: user.uid,
          loggedIn: true
        }))
      }
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Presentation/>}/>
        {
          user.loggedIn?
          <>
            <Route path='/home' element={<Home/>}/>
          </>
          :
          <>
            <Route path='/sign:id' element={<Login/>}/>
          </>
        }
      </Routes>
    </>
  );
}

export default App;
