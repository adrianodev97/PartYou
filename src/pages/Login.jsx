import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import logo from "../assets/img/logo.png"
import Button from "../components/reusable/Button";

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { selectUser, login } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

import { fb } from "../db/firebase";

const useStyles01 = makeStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: "#586da7",
    },
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const useStyles02 = makeStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: "#f5a336",
    },
    '& > *': {
      marginBottom: theme.spacing(1.5),
    },
  },
}));

const Login = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const user = useSelector(selectUser)

  const classes01 = useStyles01();
  const classes02 = useStyles02();

  const [activeForm, setActiveForm] = useState(id === "up" ? true : false)

  const changeLogin = () => { activeForm ? setActiveForm(false) : setActiveForm(true) }

  const [loginData, setLoginData] = useState({})
  const [error, setError] = useState({ email: false, password: false })

  const dispatch = useDispatch()

  const signIn = () => {
    fb.auth.in(loginData.email, loginData.password).then((response) => {
      dispatch(login({
        email: response.email,
        id: response.uid,
        loggedIn: true
      }))
      navigate("/home")
    }).catch(() => {
      setError({email: true, password: true})
    })
  }

  return (
    <>
      <section className={["loginPage", activeForm ? "active" : ""].join(" ")}>
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
          <div className={["formBx", activeForm ? "active" : ""].join(" ")}>
            <div className="form signinForm">
              <div className="logo">
                <img src={logo} width="200px" alt="" />
              </div>
              <form className={classes01.root}>
                <h3>Login</h3>
                <TextField
                  label="Email"
                  error={error.email}
                  value={loginData.email || ""}
                  onChange={(ev) => {
                    setLoginData((prev) => ({ ...prev, email: ev.target.value }))
                    setError({ email: false, password: false })
                  }}
                />
                <TextField
                  label="Senha"
                  error={error.password}
                  type="password"
                  autoComplete="current-password"
                  value={loginData.password || ""}
                  onChange={(ev) => {
                    setLoginData((prev) => ({ ...prev, password: ev.target.value }))
                    setError({ email: false, password: false })
                  }}
                />
                <Button color="primary" onclick={signIn} full>Login</Button>
              </form>
            </div>
            <div className="form signupForm">
              <form className={classes02.root}>
                <h3>Cadastro</h3>
                <RadioGroup aria-label="gender" name="gender1" >
                  <FormControlLabel value="cliente" control={<Radio />} label="Cliente" />
                  <FormControlLabel value="profissional" control={<Radio />} label="Profissional" />
                </RadioGroup>
                <TextField label="Nome Completo / Razão Social" />
                <TextField label="Email" />
                <div className="inline-input">
                  <TextField label="Telefone" />
                  <FormControl /* className={classes.formControl} */>
                    <InputLabel htmlFor="age-native-simple">Segmento</InputLabel>
                    <Select
                      native
                      /* value={state.age}
                      onChange={handleChange} */
                      /* inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                      }} */
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>

                </div>
                <div className="inline-input">
                  <TextField label="Senha" type="password" autoComplete="current-password" />
                  <TextField label="Senha" type="password" autoComplete="current-password" />
                </div>
                <Button color="secondary" full>Criar Conta</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login