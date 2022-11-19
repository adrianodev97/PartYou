import logo from "../../assets/img/logo.png"
import Button from "../reusable/Button"

import { selectUser, logout } from "../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

import { fb } from "../../db/firebase";

import { useNavigate } from "react-router-dom";

const Header = () => {

  const user = useSelector(selectUser)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  return (
    <>
      <header className="header">
        <div className="header-content container">
          <img src={logo} height="75px" alt="logo" />
          <nav>

          </nav>
          <div className="link-login">
            <Button classStyle="btn-neutral" color="primary" link={user.loggedIn? "/home" : "/signin"} small>Entrar</Button>
            <Button 
              color="secondary" 
              onclick={user.loggedIn? () => {
                fb.auth.out().then(() => {
                  dispatch(logout())
                  console.log("Logout")
                })
                navigate("/signup")
              } : () => {navigate("/signup")}} 
              small
            >Crie sua conta</Button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header