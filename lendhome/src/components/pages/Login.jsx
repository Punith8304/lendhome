import React, {useState} from "react"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [loginType, setLoginType] = useState({
    login: true,
    signup: false
  })
  const [signUpCredentials, setSignUpCredentials] = useState({
    email: "",
    username: "",
    password: ""
  })
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: ""
  })
  function hanldeLogin() {
    navigate("/")
  }
  function handleLoginCredentials(event) {
    const inputType = event.target.name;
    loginType.login ? 
    setLoginCredentials((prevValue) => {
      return {
        ...prevValue,
        [inputType]: event.target.value
      }
    }) : setSignUpCredentials((prevValue) => {
      console.log(inputType)
      return {
        ...prevValue,
        [inputType]: event.target.value
      }
    })
    console.log(loginCredentials, signUpCredentials)
  }
  
  return <div>
    <form>

      <input type="text" name="email" value={loginType.login ? loginCredentials.email : signUpCredentials.email} onChange={handleLoginCredentials} placeholder="Email" />
      {loginType.login ? null : <input type="text" name="username" onChange={handleLoginCredentials} placeholder="Enter your name" value={signUpCredentials.username}/>  }
      <input type="password" name="password" value={loginType.login ? loginCredentials.password : signUpCredentials.password} onChange={handleLoginCredentials} placeholder="Enter your password"/>
      <button onClick={hanldeLogin}>login</button>
      {loginType.login ? <div><label >Not a member? </label><button onClick={(event) => {setLoginType({login: false, signup: true});event.preventDefault()}}>Sign Up</button></div> : 
      <div><label > Already a member? </label><button onClick={(event) => {setLoginType({login: true, signup: false});event.preventDefault()}}>Login</button> </div> }

    </form>
  </div>
}
export default Login