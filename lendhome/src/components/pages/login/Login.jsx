import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css";
import validator from "validator";
import axios from "axios"
function Login() {
  const navigate = useNavigate()
  const [credentialsError, setCredentialsError] = useState({
    password: true,
    passwordConfirm: true,
  })
  const [loginType, setLoginType] = useState({
    login: true,
    signup: false
  })
  const [signUpCredentials, setSignUpCredentials] = useState({
    email: "",
    username: "",
    password: "",
    passwordCheck: ""
  })
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: ""
  })
  function handleLoginCredentials(event) {
    const inputType = event.target.name;
    if (loginType.login) {
      setLoginCredentials((prevValue) => {
        return {
          ...prevValue,
          [inputType]: event.target.value
        }
      })
    } else {
      setSignUpCredentials((prevValue) => {
        return {
          ...prevValue,
          [inputType]: event.target.value
        }
      })
    }
  }
  async function handleLogin() {
    if (validator.isEmail(loginCredentials.email)) {
      const loginStatus = await axios.post("http://localhost:8000/user/login", loginCredentials)
      console.log(loginStatus)
    }
  }
  async function handleSignUp() {
    if (validator.isEmail(signUpCredentials.email)) {
      const signUpStatus = await axios.post("http://localhost:8000/user/signup", signUpCredentials)
    }
  }
  async function checkCredentials(event) {
    event.preventDefault()
    const checkObject = {
      passwordConfirm: signUpCredentials.password === signUpCredentials.passwordCheck,
      password: (loginType.login ? loginCredentials.password.length >= 8 : signUpCredentials.password.length >= 8)
    }
    setCredentialsError(checkObject)
    const objectValue = Object.values(checkObject).every(value => value === true)
    if(objectValue) {
      loginType.login ? handleLogin() : handleSignUp()
    }
  }
  return <div>
    <form className="login-form">
      <div className="login-form-details">
        {loginType.login ? <h3>Enter Login Details</h3> : <h3>Enter Sign Up Details</h3>}
        <input type="email" id="email" name="email" value={loginType.login ? loginCredentials.email : signUpCredentials.email} onChange={handleLoginCredentials} placeholder="Email" />
      </div>
      <div className="signup-form-details">
        {loginType.login ? null : <input type="text" name="username" onChange={handleLoginCredentials} placeholder="Enter your name" value={signUpCredentials.username} />}
      </div>
      <div className="login-form-password">
        <input type="password" name="password" value={loginType.login ? loginCredentials.password : signUpCredentials.password} onChange={handleLoginCredentials} placeholder="Enter your password" />
        {!credentialsError.password && <p style={{ color: "red", fontSize: "smaller" }}>*Password must contain atleast 8 letters</p>}
      </div>
      {loginType.signup && <div className="login-form-password">
        <input type="password" name="passwordCheck" value={loginType.login ? loginCredentials.password : signUpCredentials.passwordCheck} onChange={handleLoginCredentials} placeholder="Re-enter your password" />
        {!credentialsError.passwordConfirm && <p style={{ color: "red", fontSize: "smaller" }}>*Password doesn't match</p>}
      </div>}

      <div className="login-form-submit-details">
        <button onClick={checkCredentials}>{loginType.login ? "login" : "Signup"}</button>
      </div>
      <div className="login-form-type" style={{ textAlign: "center" }}><label style={{ fontSize: "small", marginRight: "1rem" }}> {loginType.login ? "Not a member?" : "Already a member?"} </label>
        <button onClick={(event) => { setLoginType({ login: !loginType.login, signup: !loginType.signup }); event.preventDefault() }}>{loginType.login ? "Signup" : "Login"}</button>
      </div>
    </form>
  </div>
}
export default Login