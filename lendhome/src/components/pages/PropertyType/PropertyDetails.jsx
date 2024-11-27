import React, { useState } from "react";
import "../../styles/Properties.css";
import { NavLink } from "react-router-dom"
const pages = ["property", "locality", "rental", "amenities", "gallery", "schedule"]
function PropertyDetails() {
    return <div className="property-page">
        <div>
            property details
            <div className="details-property"  >
                {pages.map((pg) => {
                    return <NavLink to={`/owner/rent/${pg}`} className="property-button" >
                        {pg.charAt(0).toUpperCase() + pg.slice(1)}
                    </NavLink>
                })}
            </div>
        </div>
    </div>
}

export default PropertyDetails
