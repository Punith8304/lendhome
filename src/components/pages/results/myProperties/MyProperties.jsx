import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../PropertyCard.jsx";

function MyProperties() {
    const [propertyData, setPropertyData] = useState([])
    const [propertyIds, setPropertyIds] = useState([])
    useEffect(() => {
        if (propertyIds.length === 0) {
            (async function () {
                const result = await axios.get("http://localhost:8000/user-property/get-posted-properties", { withCredentials: true })
                setPropertyIds(result.data.propertiesIds)
                console.log(result.data, "property Ids")
            })()
        } else if (propertyIds.length !== propertyData.length) {
            
            (async function () {
                propertyIds.forEach(async (houseId) => {
                    const houseDetails = await axios.post("http://localhost:8000/property-details/get-display-properties", { houseId: houseId }, { withCredentials: true })
                    console.log(propertyData, propertyIds, houseDetails.data)
                    setPropertyData(prev => {
                        console.log(prev, "previous", propertyIds)
                        return [...prev, houseDetails.data]
                    })
                })
            })()
            console.log(propertyIds.length, propertyData.length)
        }
    }, [propertyIds])
    return <div>
        {Object.keys(propertyData).length === 0 ? <div><h1>No Properties Posted</h1></div> : propertyData.map((details) => {
            return <PropertyCard displayDetails={details} />
        })}
    </div>
}
export default MyProperties