import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";
import validator from "validator";
import axios from "axios"
import { loginStatusContext } from "../../../App.jsx";
function Login() {
  const location = useLocation()
  const pathname = location.pathname
  const navigate = useNavigate()
  const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
  const [loginError, setLoginError] = useState({ email: false, password: false })
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: ""
  })
  function handleLoginCredentials(event) {
    const inputType = event.target.name;
    setLoginCredentials((prevValue) => {
      return {
        ...prevValue,
        [inputType]: event.target.value
      }
    })
  }
  async function handleLogin(event) {
    if (validator.isEmail(loginCredentials.email)) {
      event.preventDefault()
      const loginStatus = await axios.post("http://localhost:8000/user/login", loginCredentials, { withCredentials: true })
      if (loginStatus.data.login) {
        setUserAuthentication(loginStatus.data)
        navigate(pathname === "/login" ? "/" : pathname)
      } else {
        setLoginError({
          email: loginStatus.data.emailError,
          password: loginStatus.data.passwordError
        })
        navigate("/login")
      }
    }
  }
  return <div>
    <form className="login-form">
      <div className="login-form-details">
        <h3>Enter Login Details</h3>
        <input type="email" id="email" name="email" value={loginCredentials.email} onChange={handleLoginCredentials} placeholder="Email" />
        {loginError.email && <p style={{ color: "red", fontSize: "smaller" }}>*Email not found</p>}
      </div>
      <div className="login-form-password">
        <input type="password" name="password" value={loginCredentials.password} onChange={handleLoginCredentials} placeholder="Enter your password" />
        {loginError.password && <p style={{ color: "red", fontSize: "smaller" }}>*Password Incorrect</p>}
      </div>
      <div className="login-form-submit-details">
        <button onClick={handleLogin}>login</button>
      </div>
      <div className="login-form-type" style={{ textAlign: "center" }}><label style={{ fontSize: "small", marginRight: "1rem" }}>Not a member?</label>
        <button onClick={(event) => { event.preventDefault(); navigate("/signup") }}>Signup </button>
      </div>
    </form>
  </div>
}
export default Login