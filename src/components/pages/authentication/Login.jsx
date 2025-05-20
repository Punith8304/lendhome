// import React, { useContext, useEffect, useState } from "react"
// import { useNavigate, useLocation } from "react-router-dom";
// import "./Login.css";
// import validator from "validator";
// import axios from "axios"
// import { loginStatusContext } from "../../../App.jsx";
// function Login() {
//   const location = useLocation()
//   const pathname = location.pathname
//   const navigate = useNavigate()
//   const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
//   const [loginError, setLoginError] = useState({ email: false, password: false })
//   const [loginCredentials, setLoginCredentials] = useState({
//     email: "",
//     password: ""
//   })
//   function handleLoginCredentials(event) {
//     const inputType = event.target.name;
//     setLoginCredentials((prevValue) => {
//       return {
//         ...prevValue,
//         [inputType]: event.target.value
//       }
//     })
//   }
//   async function handleLogin(event) {
//     if (validator.isEmail(loginCredentials.email)) {
//       event.preventDefault()
//       const loginStatus = await axios.post(`${userAuthentication.apiEndPoint}/user/login`, loginCredentials, { withCredentials: true })
//       if (loginStatus.data.login) {
//         setUserAuthentication(prev => {
//           return { ...loginStatus.data, apiEndPoint: prev.apiEndPoint }
//         })
//         navigate(pathname === "/login" ? "/" : pathname)
//       } else {
//         setLoginError({
//           email: loginStatus.data.emailError,
//           password: loginStatus.data.passwordError
//         })
//         navigate("/login")
//       }
//     }
//   }
//   return <div>
//     <form className="login-form">
//       <div className="login-form-details">
//         <h3>Enter Login Details</h3>
//         <input type="email" id="email" name="email" value={loginCredentials.email} onChange={handleLoginCredentials} placeholder="Email" />
//         {loginError.email && <p style={{ color: "red", fontSize: "smaller" }}>*Email not found</p>}
//       </div>
//       <div className="login-form-password">
//         <input type="password" name="password" value={loginCredentials.password} onChange={handleLoginCredentials} placeholder="Enter your password" />
//         {loginError.password && <p style={{ color: "red", fontSize: "smaller" }}>*Password Incorrect</p>}
//       </div>
//       <div className="login-form-submit-details">
//         <button onClick={handleLogin}>login</button>
//       </div>
//       <div className="login-form-type" style={{ textAlign: "center" }}><label style={{ fontSize: "small", marginRight: "1rem" }}>Not a member?</label>
//         <button onClick={(event) => { event.preventDefault(); navigate("/signup") }}>Signup </button>
//       </div>
//     </form>
//   </div>
// }
// export default Login


import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { loginStatusContext } from "../../../App.jsx";
import "./Auth.css";

function Login() {
  const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError({ email: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator.isEmail(formData.email)) {
      return setError(prev => ({ ...prev, email: "Invalid email format" }));
    }

    try {
      const response = await axios.post(`${userAuthentication.apiEndPoint}/user/login`, formData, { withCredentials: true });
      const data = response.data;
      if (data.login) {
        setUserAuthentication(prev => ({ ...data, apiEndPoint: prev.apiEndPoint }));
        navigate(pathname === "/login" ? "/" : pathname);
      } else {
        setError({
          email: data.emailError ? "Email not found" : "",
          password: data.passwordError ? "Incorrect password" : ""
        });
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {error.email && <p className="error-msg">{error.email}</p>}

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        {error.password && <p className="error-msg">{error.password}</p>}

        <button type="submit">Login</button>

        <p className="auth-switch">
          Not a member? <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
