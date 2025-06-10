// import React, { useEffect, useState, useContext } from "react"
// import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom";
// import axios from "axios"
// import { loginStatusContext } from "../../../App.jsx";

// function PropertyCard(props) {
//     const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
//     const navigate = useNavigate()
//     const [preferredTypes, setPreferredTypes] = useState()
//     const resultStyle = {
//         paddingRight: "4rem",
//         paddingLeft: "4rem",
//         borderRight: "solid 1px black",
//         fontSize: "10px"
//     }
//     const [image, setImage] = useState()
//     useEffect(() => {
//         if (displayDetails.anyone) {
//             setPreferredTypes("Anyone")
//         } else {
//             const preferredTenants = {
//                 "family": displayDetails.family,
//                 "bachelor female": displayDetails.bachelor_female,
//                 "bachelor male": displayDetails.bachelor_male,
//                 "company": displayDetails.company
//             }
//             const objectKeys = Object.keys(preferredTenants)
//             const trueTenants = objectKeys.map(key => {
//                 if (preferredTenants[key]) {
//                     return key
//                 }
//             })
//             setPreferredTypes(trueTenants.join(","))
//             console.log(trueTenants.join(","))
//         }

//     }, [])

//     function getFullResult() {
//         navigate(`/house?id=${displayDetails.house_id}`)
//     }
//     async function handleWishList() {
//         const result = await axios.post(`${userAuthentication.apiEndPoint}/user-property/add-to-wishlist`, { houseId: displayDetails.house_id }, { withCredentials: true })
//         if (result.data.status === 200) {
//             navigate('/wish-list')
//         } else {
//             alert("Unable to add to favourites")
//         }
//     }

//     return <div className="display-house-properties-card" style={{ border: "1px solid black", width: "60vw", marginLeft: "1.5rem", width: "fit-content", height: "fit-content" }}>
//         <div style={{ margin: "1.5rem" }}>
//             <h3 style={{ paddingBottom: "1rem" }}>
//                 {/* <a href="/result?house=2bhk">2BHK House for rent in Gachibowli</a> */}
//                 <p>{displayDetails.house_type} House for rent</p>
//             </h3>
//             <p style={{ fontSize: "15px" }}>
//                 {displayDetails.apartment_type}, {displayDetails.area_name}
//             </p>
//         </div>
//         <div style={{ display: "flex", borderTop: "1px solid black", borderBottom: "1px solid black", width: "fit-content", padding: "1.5rem 2rem" }}>
//             <div style={{ borderRight: "solid 1px black", padding: "0 5.25rem" }}>
//                 <p>
//                     {displayDetails.expected_rent}
//                 </p>
//                 <p>
//                     {displayDetails.rent_negotiable === true ? "rent negotiable" : "non-nogotiable"}
//                 </p>
//             </div>
//             <div style={{ borderRight: "solid 1px black", padding: "0 5.25rem" }}>
//                 <p>
//                     {displayDetails.deposit_amount}
//                 </p>
//                 <p>
//                     deposit
//                 </p>
//             </div>
//             <div style={{ padding: "0 5.8rem" }}>
//                 <p>
//                     {displayDetails.area_builtup} sqft
//                 </p>
//                 <p>
//                     Built Up
//                 </p>
//             </div>
//         </div>
//         <div style={{ display: "flex" }}>
//             <img style={{ width: "16vw", margin: "1.5rem 1rem 1.5rem 1.5rem" }} src={`${userAuthentication.apiEndPoint}/property-details/images/${displayDetails.gallery_id}`} alt="house-img" />
//             <div className="house-card-details" style={{ margin: "1.5 1.5 0 1.5", paddingBottom: "1rem" }}>
//                 <div style={{ display: "flex", paddingBottom: "1rem", borderBottom: "1px solid black" }}>
//                     <div style={resultStyle}>
//                         <h5>
//                             {displayDetails.furnishedtype}
//                         </h5>
//                         <p>
//                             Furnishing
//                         </p>
//                     </div>
//                     <div style={{ ...resultStyle, border: "none" }}>
//                         <h5>{displayDetails.house_type}</h5>
//                         <p>Apartment Type</p>
//                     </div>
//                 </div>
//                 <div style={{ display: "flex", paddingTop: "1rem" }}>
//                     <div style={{ ...resultStyle }}>
//                         <h5>
//                             {preferredTypes}
//                         </h5>
//                         <p>
//                             Preferred Tenants
//                         </p>
//                     </div>
//                     <div style={{ ...resultStyle, border: "none" }}>
//                         <h5>{displayDetails.available_from.split('T')[0]}</h5>
//                         <p>Available from</p>
//                     </div>
//                 </div>
//                 <Button onClick={getFullResult} style={{ margin: "1rem 2rem auto 4rem" }} variant="contained" size="small">
//                     Get House details
//                 </Button>

//                 {wishList ? null : <Button onClick={handleWishList} style={{ margin: "1rem 2rem auto 4rem" }} variant="contained" size="small">
//                     Add to wishlist
//                 </Button>}
//             </div>
//         </div>
//     </div>
// }

// export default PropertyCard



import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginStatusContext } from "../../../App.jsx";
import "./PropertyCard.css";

function PropertyCard(props) {
    const { userAuthentication } = useContext(loginStatusContext);
    const navigate = useNavigate();
    const [preferredTypes, setPreferredTypes] = useState("");
    const [checkWishlist, setCheckWishlist] = useState(false)

    useEffect(() => {
        if (props.displayDetails.anyone) {
            setPreferredTypes("Anyone");
        } else {
            const preferredTenants = {
                family: props.displayDetails.family,
                "bachelor female": props.displayDetails.bachelor_female,
                "bachelor male": props.displayDetails.bachelor_male,
                company: props.displayDetails.company,
            };
            const selected = Object.keys(preferredTenants)
                .filter(key => preferredTenants[key])
                .join(", ");
            setPreferredTypes(selected);
        }
    }, []);

    const getFullResult = () => {
        navigate(`/house?id=${props.displayDetails.house_id}`);
    };
console.log(props.displayDetails, "split error cause")
    const handleWishList = async () => {
        const result = await axios.post(
            `${userAuthentication.apiEndPoint}/user-property/add-to-wishlist`,
            { houseId: props.displayDetails.house_id },
            { withCredentials: true }
        );
        if (result.data.status === 200) {
            setCheckWishlist(true)
        } else {
            alert("Unable to add to favourites");
        }
    };

    const removeFromWishList = async () => {
        try {
            const result = await axios.post(
                `${userAuthentication.apiEndPoint}/user-property/remove-from-wishlist`,
                { houseId: props.displayDetails.house_id },
                { withCredentials: true }
            )
            if (result.data.status) {
                setCheckWishlist(false)
            } else {
                alert("Unable to remove from favourites")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeProperty = async () => {
        try {
            const result = await axios.post(
                `${userAuthentication.apiEndPoint}/user-property/remove-property`,
                {houseId: props.displayDetails.house_id},
                {withCredentials: true}
            )
            if (result.data.status) {
                window.location.reload()
            } else {
                alert("Unable to remove from property list")
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        (async function () {
            const result = await axios.post(
                `${userAuthentication.apiEndPoint}/user-property/check-wishlist`,
                { houseId: props.displayDetails.house_id },
                { withCredentials: true }
            );
            if (result.data.exist) {
                setCheckWishlist(true)
            }
        })()
        
    }, [])


    return (
        <div className="property-card">
            <img
                className="property-image"
                src={`${userAuthentication.apiEndPoint}/property-details/images/${props.displayDetails.gallery_id}`}
                alt="House"
            />
            <div className="property-info">
                <div>
                    <h3>{props.displayDetails.house_type} House for Rent</h3>
                    <p className="subheading">
                        {props.displayDetails.apartment_type}, {props.displayDetails.area_name}
                    </p>
                </div>

                <div className="property-details">
                    <div>
                        <h5>{props.displayDetails.expected_rent}</h5>
                        <p>{props.displayDetails.rent_negotiable ? "Rent Negotiable" : "Non-Negotiable"}</p>
                    </div>
                    <div>
                        <h5>{props.displayDetails.deposit_amount}</h5>
                        <p>Deposit</p>
                    </div>
                    <div>
                        <h5>{props.displayDetails.area_builtup} sqft</h5>
                        <p>Built Up</p>
                    </div>
                    <div>
                        <h5>{props.displayDetails.furnishedtype}</h5>
                        <p>Furnishing</p>
                    </div>
                    <div>
                        <h5>{preferredTypes}</h5>
                        <p>Preferred Tenants</p>
                    </div>
                    <div>
                        <h5>{props.displayDetails.available_from.split('T')[0]}</h5>
                        <p>Available From</p>
                    </div>
                </div>

                <div className="property-buttons">
                    <button onClick={getFullResult}>Get House Details</button>
                    {props.properties ?
                        <button onClick={removeProperty}>Remove Property</button> :
                        checkWishlist ? <button onClick={removeFromWishList}>Remove from Wishlist</button> : <button onClick={handleWishList}>Add to Wishlist</button>}
                </div>
            </div>
        </div >
    );
}

export default PropertyCard;
