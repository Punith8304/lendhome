import React, { useEffect } from "react";
import Property from "../details/Property.jsx";
import Locality from "../details/Locality.jsx";
import Rental from "../details/Rental.jsx"
import Gallery from "../details/Gallery.jsx"
import Amenities from "../details/Amenities.jsx"
import Schedule from "../details/Schedule.jsx"
import "../../styles/Properties.css";
import { Route, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function PropertyDetails() {
    // const navigate = useNavigate("property")
    // const [name, setName] = React.useState()
    // async function handlePropertyDetail(pageName) {
    //     setName(pageName)
    //     return navigate("/owner/Rent/" + pageName)
    // }
    return <div className="property-page">
        <div>
        <div>
        property details

        <div className="details-property"  >
            <NavLink to="/owner/rent/property" className="property-button" >
                Property Details
            </NavLink>
            <NavLink to="/owner/rent/locality" className="property-button" >
                Locality Details
            </NavLink>
            <NavLink to="/owner/rent/rental" className="property-button" >
                Rental Details
            </NavLink>
            <NavLink to="/owner/rent/amenities" className="property-button" >
                Amenities
            </NavLink>
            <NavLink to="/owner/rent/gallery" className="property-button" >
                Gallery
            </NavLink>
            <NavLink to="/owner/rent/schedule" className="property-button" >
                Schedule
            </NavLink>

        </div>
    </div>

        </div>
        <div>
            
        </div>
    </div>
}
export default PropertyDetails