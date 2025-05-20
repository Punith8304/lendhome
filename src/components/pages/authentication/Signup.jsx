// import React, { useState, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import validator from "validator"
// import axios from "axios";
// import { loginStatusContext } from "../../../App.jsx";

// function Signup() {
//     const navigate = useNavigate()
//     const location = useLocation()
//     const pathname = location.pathname
//     const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
//     const [signUpStatus, setSignUpStatus] = useState({ status: true, message: "" })
//     const [signUpCredentials, setSignUpCredentials] = useState({
//         email: "",
//         username: "",
//         mobile: "",
//         password: "",
//         passwordCheck: ""
//     })
//     const [credentialsError, setCredentialsError] = useState({
//         password: false,
//         passwordConfirm: false,
//         mobile: false,
//         username: false
//     })
//     function handleSignUpCredentials(event) {
//         const inputType = event.target.name;
//         setSignUpCredentials((prevValue) => {
//             return {
//                 ...prevValue,
//                 [inputType]: event.target.value
//             }
//         })
//         console.log(signUpCredentials)
//     }
//     async function checkCredentials(event) {
//         if (validator.isEmail(signUpCredentials.email)) {
//             event.preventDefault()
//             const checkObject = {
//                 username: !(signUpCredentials.username.length >= 3),
//                 mobile: isNaN(signUpCredentials.mobile),
//                 passwordConfirm: !(signUpCredentials.password === signUpCredentials.passwordCheck),
//                 password: !(signUpCredentials.password.length >= 8)
//             }
//             setCredentialsError(checkObject)
//             const objectValue = Object.values(checkObject).every(value => value === false)
//             if (objectValue) {
//                 handleSignUp()
//             }
//             console.log(checkObject, signUpCredentials, objectValue)
//         }
//     }
//     async function handleSignUp() {
//         const signUpResult = await axios.post(`${userAuthentication.apiEndPoint}/user/signup`, signUpCredentials, { withCredentials: true })
//         if (signUpResult.data.login) {
//             setUserAuthentication(prev => {
//                 return { ...signUpResult.data, apiEndPoint: prev.apiEndPoint }
//             })
//             setSignUpStatus({ status: false, message: "" })
//             navigate(pathname === "/signup" ? "/" : pathname)
//         } else {
//             setSignUpStatus({ status: false, message: signUpResult.data.displayError })
//         }

//     }
//     return <div>
//         <form className="login-form">
//             <h3>Enter Sign Up Details</h3>

//             <div className="login-form-details">
//                 {!signUpStatus.status && <p style={{ color: "red", fontSize: "smaller" }}>{signUpStatus.message}</p>}
//                 <input type="email" id="email" name="email" value={signUpCredentials.email} onChange={handleSignUpCredentials} placeholder="Email" />
//             </div>
//             <div className="signup-form-details">
//                 <input type="text" name="username" onChange={handleSignUpCredentials} placeholder="Enter your name" value={signUpCredentials.username} />
//                 {credentialsError.username && <p style={{ color: "red", fontSize: "smaller" }}>*Username must contain 3 or more letters</p>}
//             </div>
//             <div>
//                 <input type="text" name="mobile" onChange={handleSignUpCredentials} placeholder="Enter your mobile number" value={signUpCredentials.mobile} />
//                 {credentialsError.mobile && <p style={{ color: "red", fontSize: "smaller" }}>*Enter mobile number in correct format</p>}
//             </div>
//             <div className="login-form-password">
//                 <input type="password" name="password" value={signUpCredentials.password} onChange={handleSignUpCredentials} placeholder="Enter your password" />
//                 {credentialsError.password && <p style={{ color: "red", fontSize: "smaller" }}>*Password must contain atleast 8 letters</p>}
//             </div>
//             <div className="login-form-password">
//                 <input type="password" name="passwordCheck" value={signUpCredentials.passwordCheck} onChange={handleSignUpCredentials} placeholder="Re-enter your password" />
//                 {credentialsError.passwordConfirm && <p style={{ color: "red", fontSize: "smaller" }}>*Password doesn't match</p>}
//             </div>
//             <div className="login-form-submit-details">
//                 <button onClick={checkCredentials}>Signup</button>
//             </div>
//             <div className="login-form-type" style={{ textAlign: "center" }}><label style={{ fontSize: "small", marginRight: "1rem" }}> Already a member? </label>
//                 <button onClick={(event) => { event.preventDefault(); navigate("/login") }}>Login</button>
//             </div>
//         </form>
//     </div>
// }
// export default Signup



import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { loginStatusContext } from "../../../App.jsx";
import "./Auth.css";

function Signup() {
  const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    mobile: "",
    password: "",
    passwordCheck: ""
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError({});
  };

  const validate = () => {
    const newError = {};
    if (!validator.isEmail(formData.email)) newError.email = "Invalid email format";
    if (formData.username.length < 3) newError.username = "Username must be at least 3 characters";
    if (!/^\d{10}$/.test(formData.mobile)) newError.mobile = "Mobile must be 10 digits";
    if (formData.password.length < 8) newError.password = "Password must be at least 8 characters";
    if (formData.password !== formData.passwordCheck) newError.passwordCheck = "Passwords do not match";
    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setError(validationErrors);
      return;
    }

    try {
      const res = await axios.post(`${userAuthentication.apiEndPoint}/user/signup`, formData, { withCredentials: true });
      if (res.data.login) {
        setUserAuthentication(prev => ({ ...res.data, apiEndPoint: prev.apiEndPoint }));
        navigate(pathname === "/signup" ? "/" : pathname);
      } else {
        setError({ general: res.data.displayError });
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error.general && <p className="error-msg">{error.general}</p>}

        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        {error.email && <p className="error-msg">{error.email}</p>}

        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
        {error.username && <p className="error-msg">{error.username}</p>}

        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required />
        {error.mobile && <p className="error-msg">{error.mobile}</p>}

        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        {error.password && <p className="error-msg">{error.password}</p>}

        <input type="password" name="passwordCheck" value={formData.passwordCheck} onChange={handleChange} placeholder="Confirm Password" required />
        {error.passwordCheck && <p className="error-msg">{error.passwordCheck}</p>}

        <button type="submit">Sign Up</button>

        <p className="auth-switch">
          Already a member? <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
