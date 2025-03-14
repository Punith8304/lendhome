import React, { useState, useContext } from "react";
import "./Owners.css";
import axios from "axios"
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from "react-router-dom";
import { loginStatusContext } from "../../../App.jsx";

function Owners() {
    const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
    const navigate = useNavigate()

    // const landProperty = ["Resale"]


    async function handlePost(event) {
        if (userAuthentication.login) {
            if (userAuthentication.user.house.houseCreationInitialised) {
                console.log(userAuthentication.user.house.currentProperty)
                navigate(`/owner/rent/${userAuthentication.user.house.currentProperty}`)
            } else {
                const result = await axios.get("http://localhost:8000/property-details/create-new-house-item", { withCredentials: true })
                setUserAuthentication(prev => {
                    return {
                        ...prev,
                        user: result.data.updateUser
                    }
                })
                navigate(`/owner/rent/${result.data.updateUser.house.currentProperty}`)
            }
        } else {
            navigate("/login")
        }
    }
    function findTrueKey(obj) {
        for (let key in obj) {
            if (obj[key]) {
                return key;
            }
        }
        return undefined;
    }
    const buttonStyle = {
        backgroundColor: "white",
        borderBottom: "4px solid green",
        width: "500px",
        height: "40px",
        marginLeft: "4rem",
        marginTop: "3rem"
    }
    return (
        <div className="owners">
            <div className="post-title">
                <p className="header">
                    Sell or Rent your property for free
                </p>
                <p className="navigate-home-p">
                    Looking for a property? <a href="/">Click here</a>
                </p>
            </div>
            <div className="post-house">
                <div className="post-description">
                    <p className="heading-2">
                        Why Post through us?
                    </p>
                    <p>
                        Zero Brokerage
                    </p>
                    <p>
                        Faster Tenants
                    </p>
                    <p>
                        Trustworthy buyers/tenants
                    </p>
                </div>
                <div className="post-details">
                    <label htmlFor="city"> Select City</label>
                    <select name="city" menuplacement="auto" id="city" minmenuheight={100}>
                        <option value="Banglore">Banglore</option>
                        <option value="Pune">Pune</option>
                        <option value="Gurgaon">Gurgaon</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Greater Noida">Greater Noida</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Noida">Noida</option>
                    </select>

                    <div>

                        <button style={buttonStyle}>Rent</button>
                    </div>
                    <button onClick={handlePost} className="post-button">
                        Start POSTING Your Ad For FREE
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Owners;