import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from "axios"

function PropertyCard(props) {
    const navigate = useNavigate()
    const [preferredTypes, setPreferredTypes] = useState()
    const resultStyle = {
        paddingRight: "4rem",
        paddingLeft: "4rem",
        borderRight: "solid 1px black",
        fontSize: "10px"
    }
    const [image, setImage] = useState()
    useEffect(() => {
        if (props.displayDetails.anyone) {
            setPreferredTypes("Anyone")
        } else {
            const preferredTenants = {
                "family": props.displayDetails.family,
                "bachelor female": props.displayDetails.bachelor_female,
                "bachelor male": props.displayDetails.bachelor_male,
                "company": props.displayDetails.company
            }
            const objectKeys = Object.keys(preferredTenants)
            const trueTenants = objectKeys.map(key => {
                if (preferredTenants[key]) {
                    return key
                }
            })
            setPreferredTypes(trueTenants.join(","))
            console.log(trueTenants.join(","))
        }
        
    }, [])

    function getFullResult() {
        navigate(`/house?id=${props.displayDetails.house_id}`)
    }
    async function handleWishList() {
        const result = await axios.post("http://localhost:8000/user-property/add-to-wishlist", { houseId: props.displayDetails.house_id }, { withCredentials: true })
        if (result.data.status === 200) {
            navigate('/wish-list')
        } else {
            alert("Unable to add to favourites")
        }
    }

    return <div className="display-house-properties-card" style={{ border: "1px solid black", width: "60vw", marginLeft: "1.5rem", width: "fit-content", height: "fit-content" }}>
        <div style={{ margin: "1.5rem" }}>
            <h3 style={{ paddingBottom: "1rem" }}>
                {/* <a href="/result?house=2bhk">2BHK House for rent in Gachibowli</a> */}
                <p>{props.displayDetails.house_type} House for rent</p>
            </h3>
            <p style={{ fontSize: "15px" }}>
                {props.displayDetails.apartment_type}, {props.displayDetails.area_name}
            </p>
        </div>
        <div style={{ display: "flex", borderTop: "1px solid black", borderBottom: "1px solid black", width: "fit-content", padding: "1.5rem 2rem" }}>
            <div style={{ borderRight: "solid 1px black", padding: "0 5.25rem" }}>
                <p>
                    {props.displayDetails.expected_rent}
                </p>
                <p>
                    {props.displayDetails.rent_negotiable === true ? "rent negotiable" : "non-nogotiable"}
                </p>
            </div>
            <div style={{ borderRight: "solid 1px black", padding: "0 5.25rem" }}>
                <p>
                    {props.displayDetails.deposit_amount}
                </p>
                <p>
                    deposit
                </p>
            </div>
            <div style={{ padding: "0 5.8rem" }}>
                <p>
                    {props.displayDetails.area_builtup} sqft
                </p>
                <p>
                    Built Up
                </p>
            </div>
        </div>
        <div style={{ display: "flex" }}>
            <img style={{ width: "16vw", margin: "1.5rem 1rem 1.5rem 1.5rem" }} src={`http://localhost:8000/property-details/images/${props.displayDetails.gallery_id}`} alt="house-img" />
            <div className="house-card-details" style={{ margin: "1.5 1.5 0 1.5", paddingBottom: "1rem" }}>
                <div style={{ display: "flex", paddingBottom: "1rem", borderBottom: "1px solid black" }}>
                    <div style={resultStyle}>
                        <h4>
                            {props.displayDetails.furnishedtype}
                        </h4>
                        <p>
                            Furnishing
                        </p>
                    </div>
                    <div style={{ ...resultStyle, border: "none" }}>
                        <h4>{props.displayDetails.house_type}</h4>
                        <p>Apartment Type</p>
                    </div>
                </div>
                <div style={{ display: "flex", paddingTop: "1rem" }}>
                    <div style={{ ...resultStyle }}>
                        <h4>
                            {preferredTypes}
                        </h4>
                        <p>
                            Preferred Tenants
                        </p>
                    </div>
                    <div style={{ ...resultStyle, border: "none" }}>
                        <h4>{props.displayDetails.available_from.split('T')[0]}</h4>
                        <p>Available from</p>
                    </div>
                </div>
                <Button onClick={getFullResult} style={{ margin: "1rem 2rem auto 4rem" }} variant="contained" size="small">
                    Get House details
                </Button>

                {props.wishList ? null : <Button onClick={handleWishList} style={{ margin: "1rem 2rem auto 4rem" }} variant="contained" size="small">
                    Add to wishlist
                </Button>}
            </div>
        </div>
    </div>
}

export default PropertyCard