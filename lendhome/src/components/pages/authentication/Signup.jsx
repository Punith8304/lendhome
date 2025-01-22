import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import validator from "validator"
import axios from "axios";
import { loginStatusContext } from "../../../App.jsx";

function Signup() {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname
    const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
    const [signUpStatus, setSignUpStatus] = useState({ status: true, message: "" })
    const [signUpCredentials, setSignUpCredentials] = useState({
        email: "",
        username: "",
        mobile: "",
        password: "",
        passwordCheck: ""
    })
    const [credentialsError, setCredentialsError] = useState({
        password: false,
        passwordConfirm: false,
        mobile: false,
        username: false
    })
    function handleSignUpCredentials(event) {
        const inputType = event.target.name;
        setSignUpCredentials((prevValue) => {
            return {
                ...prevValue,
                [inputType]: event.target.value
            }
        })
        console.log(signUpCredentials)
    }
    async function checkCredentials(event) {
        if (validator.isEmail(signUpCredentials.email)) {
            event.preventDefault()
            const checkObject = {
                username: !(signUpCredentials.username.length >= 3),
                mobile: isNaN(signUpCredentials.mobile),
                passwordConfirm: !(signUpCredentials.password === signUpCredentials.passwordCheck),
                password: !(signUpCredentials.password.length >= 8)
            }
            setCredentialsError(checkObject)
            const objectValue = Object.values(checkObject).every(value => value === false)
            if (objectValue) {
                handleSignUp()
            }
            console.log(checkObject, signUpCredentials, objectValue)
        }
    }
    async function handleSignUp() {
        const signUpResult = await axios.post("http://localhost:8000/user/signup", signUpCredentials, { withCredentials: true })
        if (signUpResult.data.login) {
            setUserAuthentication(signUpResult.data)
            setSignUpStatus({ status: false, message: "" })
            navigate(pathname === "/signup" ? "/" : pathname)
        } else {
            setSignUpStatus({ status: false, message: signUpResult.data.displayError })
        }

    }
    return <div>
        <form className="login-form">
            <h3>Enter Sign Up Details</h3>

            <div className="login-form-details">
                {!signUpStatus.status && <p style={{ color: "red", fontSize: "smaller" }}>{signUpStatus.message}</p>}
                <input type="email" id="email" name="email" value={signUpCredentials.email} onChange={handleSignUpCredentials} placeholder="Email" />
            </div>
            <div className="signup-form-details">
                <input type="text" name="username" onChange={handleSignUpCredentials} placeholder="Enter your name" value={signUpCredentials.username} />
                {credentialsError.username && <p style={{ color: "red", fontSize: "smaller" }}>*Username must contain 3 or more letters</p>}
            </div>
            <div>
                <input type="text" name="mobile" onChange={handleSignUpCredentials} placeholder="Enter your mobile number" value={signUpCredentials.mobile} />
                {credentialsError.mobile && <p style={{ color: "red", fontSize: "smaller" }}>*Enter mobile number in correct format</p>}
            </div>
            <div className="login-form-password">
                <input type="password" name="password" value={signUpCredentials.password} onChange={handleSignUpCredentials} placeholder="Enter your password" />
                {credentialsError.password && <p style={{ color: "red", fontSize: "smaller" }}>*Password must contain atleast 8 letters</p>}
            </div>
            <div className="login-form-password">
                <input type="password" name="passwordCheck" value={signUpCredentials.passwordCheck} onChange={handleSignUpCredentials} placeholder="Re-enter your password" />
                {credentialsError.passwordConfirm && <p style={{ color: "red", fontSize: "smaller" }}>*Password doesn't match</p>}
            </div>
            <div className="login-form-submit-details">
                <button onClick={checkCredentials}>Signup</button>
            </div>
            <div className="login-form-type" style={{ textAlign: "center" }}><label style={{ fontSize: "small", marginRight: "1rem" }}> Already a member? </label>
                <button onClick={(event) => { event.preventDefault(); navigate("/login") }}>Login</button>
            </div>
        </form>
    </div>
}
export default Signup