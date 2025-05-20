import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropertyCard from "../PropertyCard.jsx";
import { loginStatusContext } from "../../../../App.jsx";
import noPropertiesImg from "../../../../images/real-estate-background-design_1212-415.avif"
import "./MyProperties.css"

function MyProperties() {
    const { userAuthentication } = useContext(loginStatusContext)
    const navigate = useNavigate()
    const [propertyData, setPropertyData] = useState([])
    const [propertyIds, setPropertyIds] = useState([])

    useEffect(() => {
        (async function () {
            const result = await axios.get(`${userAuthentication.apiEndPoint}/user-property/get-posted-properties`, { withCredentials: true })
            if (!result.data.isEmpty) {
                setPropertyIds(result.data.propertiesIds)
            }
        })()
    }, [])


    useEffect(() => {
        (async function () {
            propertyIds.map(async (houseId) => {
                const houseDetails = await axios.post(`${userAuthentication.apiEndPoint}/property-details/get-display-properties`, { houseId }, { withCredentials: true })
                setPropertyData(prev => [...prev, houseDetails.data])
                console.log(houseDetails.data)
            })
        })()
    }, [propertyIds])


    return <div>
        {Object.keys(propertyData).length === 0 ? (
            <div className="no-properties">
                <img src={noPropertiesImg} alt="No Properties" />
                <h2>No Properties Posted Yet</h2>
                <p>You haven’t listed any properties. Let’s help you get started!</p>
                <button onClick={() => navigate("/owner")}>
                    Post Your First Property
                </button>
            </div>
        ) : propertyData.map((details) => {
            return <PropertyCard displayDetails={details} properties={true} />
        })}
        {Object.keys(propertyData).length !== 0 && (<div className="button-wrapper">
            <button className="start-posting-btn" onClick={() => navigate("/owner")}>
                Post More Properties
            </button>
        </div>)}
    </div>
}
export default MyProperties