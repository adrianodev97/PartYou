import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
