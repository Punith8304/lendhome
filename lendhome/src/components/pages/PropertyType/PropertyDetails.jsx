import React, { useEffect, useState } from "react";
import "../../styles/Properties.css";
import { Route, NavLink, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
const pages = ["property", "locality", "rental", "amenities", "gallery", "schedule"]
function PropertyDetails() {
    const [page, setPage] = useState("property")
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
function NextPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPage = location.pathname.split("/").pop();
    function handleSubmit() {
        console.log("submitted successfully")
    }
    function handleNextPageClick() {
        const currentPage = location.pathname.split("/").pop();
        const nextIndex = pages.indexOf(currentPage)+1;
        console.log(currentPage)
        navigate(`/owner/rent/${pages[nextIndex]}`)
    }
    return <div className="details-submit-button">
        {currentPage === "schedule" ? (
            <Button variant="contained" onClick={handleSubmit}>Save</Button>
        ) : (
            <Button variant="contained" onClick={handleNextPageClick}>Save & Next</Button>
        )}
    </div>
}
export default PropertyDetails
export { NextPage }