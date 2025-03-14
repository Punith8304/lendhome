import React, { useContext, useState } from "react";
import "./Properties.css";
import { NavLink } from "react-router-dom"
import { loginStatusContext } from "../../../../App.jsx";
const pages = ["property", "locality", "rental", "amenities", "gallery", "schedule"]
function PropertyDetails() {
    const {userAuthentication} = useContext(loginStatusContext)
    return <div className="property-page">
        <div>
            property details
            <div className="details-property"  >
                {pages.map((pg) => {
                    const condition = userAuthentication.user.house.completedList.includes(pg)
                    return <NavLink style={ condition ? {backgroundColor: "green"} : null} to={`/owner/rent/${pg}`} className="property-button" >
                        {pg.charAt(0).toUpperCase() + pg.slice(1)}
                    </NavLink>
                })}
            </div>
        </div>
    </div>
}

export default PropertyDetails
