import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css";
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
    <form className="login-form">
      <div className="login-form-details">
        {loginType.login ? <h3>Enter Login Details</h3> : <h3>Enter Sign Up Details</h3>}
        <input type="text" name="email" value={loginType.login ? loginCredentials.email : signUpCredentials.email} onChange={handleLoginCredentials} placeholder="Email" />
      </div>
      <div className="signup-form-details">
        {loginType.login ? null : <input type="text" name="username" onChange={handleLoginCredentials} placeholder="Enter your name" value={signUpCredentials.username} />}
      </div>
      <div className="login-form-password">
        <input type="password" name="password" value={loginType.login ? loginCredentials.password : signUpCredentials.password} onChange={handleLoginCredentials} placeholder="Enter your password" />
      </div>

      <div className="login-form-submit-details">
        <button onClick={hanldeLogin}>{loginType.login ? "login" : "Signup"}</button>
      </div>
      <div className="login-form-type" style={{ textAlign: "center" }}><label style={{ fontSize: "small", marginRight: "1rem" }}> {loginType.login ? "Not a member?" : "Already a member?"} </label>
        <button onClick={(event) => { setLoginType({ login: !loginType.login, signup: !loginType.signup }); event.preventDefault() }}>{loginType.login ? "Signup" : "Login"}</button>
      </div>
    </form>
  </div>
}
export default Login