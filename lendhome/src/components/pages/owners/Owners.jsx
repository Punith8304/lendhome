import React, { useState } from "react";
import "./Owners.css";
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from "react-router-dom";
import PropertyDetails from "./houseUploadLayout/PropertyDetails";


function Owners() {
    const navigate = useNavigate()
    const propertyTypes = { rent: false, resale: false, pg_hostel: false, flatmates: false, sale: false }
    const residentialProperty = ["Rent", "Resale", "Pg_Hostel", "Flatmates"];
    const commercialProperty = ["Rent", "Sale"];
    // const landProperty = ["Resale"]
    const properties = { residential: false, commercial: false, land: false }

    const [currentProperty, setCurrentProperty] = useState({ residential: true, commercial: false, land: false })
    const [currentPropertyType, setCurrentPropertytype] = useState({ Rent: true, Resale: false, Pg_Hostel: false, Flatmates: false, Sale: false })
    function handleChange(event) {
        const clickedProperty = event.target.name;
        properties[clickedProperty] = true;
        setCurrentProperty(properties)
        console.log(properties)
        if (clickedProperty === "residential" || clickedProperty === "commercial") {
            setCurrentPropertytype({
                ...propertyTypes,
                Rent: true
            })
        } else if (clickedProperty === "land") {
            setCurrentPropertytype({
                ...propertyTypes,
                Resale: true
            })
        }
    }
    function handlePropertyTypeChange(event) {
        const clickedPropertyType = event.target.name;
        setCurrentPropertytype({
            ...propertyTypes,
            [clickedPropertyType]: true
        })
    }
    function handlePost(event) {
        navigate("/owner/rent/property")
    }
    function findTrueKey(obj) {
        for (let key in obj) {
            if (obj[key]) {
                return key;
            }
        }
        return undefined;
    }
    const currentPage = findTrueKey(currentPropertyType)
    const buttonStyle = {
        backgroundColor: "white",
        borderBottom: "4px solid green"
    }
    return (
        <div>
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
                    <div className="property-type-sentence">
                        property type
                    </div>
                    <div className="select-property">


                        <button className="property-button" name="residential" onClick={handleChange} style={currentProperty.residential ? buttonStyle : null}>
                            Residential
                        </button>
                        <button className="property-button" name="commercial" onClick={handleChange} style={currentProperty.commercial ? buttonStyle : null}>
                            Commercial
                        </button>
                        <button className="property-button" name="land" onClick={handleChange} style={currentProperty.land ? buttonStyle : null}>
                            Land/Plot
                        </button>
                    </div>
                    <div className="property-type">
                        <p>
                            Select Property Type
                        </p>
                        {currentProperty.residential ? residentialProperty.map((propertyType, index) => {
                            return <button name={propertyType} style={currentPropertyType[propertyType] ? buttonStyle : null} onClick={handlePropertyTypeChange}>{propertyType}</button>
                        }) : (currentProperty.commercial ? commercialProperty.map((propertyType, index) => {
                            return <button name={propertyType} style={currentPropertyType[propertyType] ? buttonStyle : null} onClick={handlePropertyTypeChange}>{propertyType}</button>
                        }) : <button name="Resale" style={currentPropertyType.Resale ? buttonStyle : null} onClick={handlePropertyTypeChange}>Resale</button>)}
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