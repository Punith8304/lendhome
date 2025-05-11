import React, { useEffect, useState, useContext } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Results.css"
import { loginStatusContext } from "../../../App.jsx";


function Results() {
    const location = useLocation()
    const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
    const [properties, setProperties] = useState([])
    const [houseIds, setHouseIds] = useState([])
    const searchParams = {}
    const querySearchParameter = new URLSearchParams(location.search)
    const paramsIterator = querySearchParameter.entries()
    async function getHouseIds() {
        for (let [key, value] of paramsIterator) {
            searchParams[key] = value;
        }
        const result = await axios.post(`${userAuthentication.apiEndPoint}/property-details/get-house-ids`, searchParams, { withCredentials: true })
        setHouseIds(result.data)
    }
    useEffect(() => {
        getHouseIds()
        console.log("got house Ids")
    }, [])
    useEffect(() => {
        (async function () {
            houseIds.forEach(async houseId => {
                const result = await getFullProperties(houseId)
                console.log(result)
                setProperties(prev => [...prev, result])
            })
        })()
        console.log(houseIds)
    }, [houseIds])
    
    async function getFullProperties(houseId) {
        const result = await axios.post(`${userAuthentication.apiEndPoint}/property-details/get-display-properties`, { houseId: houseId }, { withCredentials: true })
        console.log(result.data, "display result")
        return result.data
    }
    
    return <div>
        {houseIds.length === 0 ? <h1>No Properties found within 10km of selection region</h1> : properties.map(element => {
            return <PropertyCard displayDetails={element} />
        })}
    </div>
    
}
export default Results