import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {

  const [signUp, setSignUp] = useState(false)

  const changeLogin = () => {signUp? setSignUp(false) : setSignUp(true)}

  return (
    <>
      <section className={["loginPage", signUp? "active" : ""].join(" ")}>
        <div className="loginBlock">
          <div className="blueBg">
            <div className="box signin">
              <h2>Já possui conta?</h2>
              <button className="signinBtn" onClick={changeLogin}>Entrar</button>
            </div>
            <div className="box signup">
              <h2>Não possui conta?</h2>
              <button className="signupBtn" onClick={changeLogin}>Cadastrar</button>
            </div>
          </div>
          <div className="formBx">
            <div className="form signinForm">
              <form>
                <h3>Sign In</h3>
                <input type="text" placeholder="Username..." />
                <input type="password" placeholder="Password..." />
                <input type="submit" value="Login" />
                <Link to="/" className="forgot">Forgot password?</Link>
              </form>
            </div>
            <div className="form signupForm">
              <form>
                <h3>Sign Up</h3>
                <input type="text" placeholder="Username..." />
                <input type="text" placeholder="Email Adress" />
                <input type="password" placeholder="Password..." />
                <input type="password" placeholder="Confirm Password..." />
                <input type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login