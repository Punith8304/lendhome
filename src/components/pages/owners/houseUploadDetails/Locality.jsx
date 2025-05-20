import React, { useState, useRef } from "react"
import NextPage from "../nexpage/NextPage.jsx";
import Button from '@mui/material/Button';
import areaCoordinates from "../../../utils/cityCoordinates.jsx";
import "./properties/Locality.css";
function Locality() {
    const inputRef = useRef()
    const [localityDetails, setLocalityDetails] = useState({
        city: "bangalore",
        area: {
            area_name: ""
        },
        street: ""
    })
    const [message, setMessage] = useState(false)
    const autoComplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        bounds: {
            north: areaCoordinates[localityDetails.city].latitude + areaCoordinates[localityDetails.city].degrees,
            south: areaCoordinates[localityDetails.city].latitude - areaCoordinates[localityDetails.city].degrees,
            east: areaCoordinates[localityDetails.city].longitude + areaCoordinates[localityDetails.city].degrees,
            west: areaCoordinates[localityDetails.city].longitude - areaCoordinates[localityDetails.city].degrees
        },
        strictBounds: true
    })
    autoComplete.addListener('place_changed', () => {
        const place = autoComplete.getPlace()
        if (!place.geometry || !place.geometry.location) {
            console.log("no location")
        }
        if (place.geometry.viewport || place.geometry.location) {
            setLocalityDetails(prev => {
                return {
                    ...prev,
                    area: {
                        area_name: inputRef.current.value,
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng()
                    }
                }
            })
        }
    })


    function handleLocalityDetailsChange(event) {
        const { name, value } = event.target;
        setLocalityDetails((prev) => {
            if (name !== "area_name") {
                return {
                    ...prev,
                    [name]: value
                }
            } else {
                return {
                    ...prev,
                    area: {
                        [name]: value
                    }
                }
            }
        })
    }

    // return <div>
    //     <div >
    //         <label htmlFor="city">City*</label>
    //         <select name="city" id="city" onChange={handleLocalityDetailsChange} >
    //             <option value="bangalore" selected>Bangalore</option>
    //             <option value="chennai">Chennai</option>
    //             <option value="delhi">Delhi</option>
    //             <option value="hyderabad">Hyderabad</option>
    //             <option value="kolkata">Kolkata</option>
    //             <option value="mumbai">Mumbai</option>
    //             <option value="pune">Pune</option>
    //         </select>
    //         <label htmlFor="locality">Area*</label>
    //         <input type="text" name="area_name" id="locality" value={localityDetails.area.area_name} ref={inputRef} placeholder="Enter Area/Society name" onChange={handleLocalityDetailsChange} />
    //         {message && <p style={{ color: "red", fontSize: "smaller", position: "relative", bottom: "1rem", left: "20rem" }}>Please select area name from suggestions</p>}

    //     </div>
    //     <div>
    //         <label htmlFor="landmark">Landmark/Street*</label>
    //         <input type="text" id="landmark" name="street" placeholder="e.g. Evergreen Street" onChange={handleLocalityDetailsChange} />
    //     </div>
    //     {!localityDetails.area.area_name || !localityDetails.street || !localityDetails.area.latitude || !localityDetails.area.longitude ? <Button variant="contained" onClick={() => {
    //         if (localityDetails.area.longitude && localityDetails.area.latitude) {
    //             setMessage(false)
    //             alert("Fill all Details")
    //         } else { setMessage(true) }
    //     }}>Save & next</Button> : <NextPage details={localityDetails} onClick={() => { setMessage(false); console.log(localityDetails) }} />}
    // </div>



    return (
        <div className="property-form">
            <div className="property-group">
                <div>
                    <label htmlFor="city">City*</label>
                    <select
                        name="city"
                        id="city"
                        onChange={handleLocalityDetailsChange}
                        defaultValue={localityDetails.city}
                    >
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="delhi">Delhi</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="pune">Pune</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="locality">Area*</label>
                    <input
                        type="text"
                        name="area_name"
                        id="locality"
                        value={localityDetails.area.area_name}
                        ref={inputRef}
                        placeholder="Enter Area/Society name"
                        onChange={handleLocalityDetailsChange}
                    />
                    {message && (
                        <p className="error-message">
                            Please select area name from suggestions
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="landmark">Landmark/Street*</label>
                    <input
                        type="text"
                        id="landmark"
                        name="street"
                        placeholder="e.g. Evergreen Street"
                        onChange={handleLocalityDetailsChange}
                    />
                </div>
            </div>

            {!localityDetails.area.area_name ||
                !localityDetails.street ||
                !localityDetails.area.latitude ||
                !localityDetails.area.longitude ? (
                <Button
                    variant="contained"
                    onClick={() => {
                        if (localityDetails.area.longitude && localityDetails.area.latitude) {
                            setMessage(false);
                            alert("Fill all Details");
                        } else {
                            setMessage(true);
                        }
                    }}
                    style={{ marginTop: "1rem" }}
                >
                    Save & Next
                </Button>
            ) : (
                <NextPage
                    details={localityDetails}
                    onClick={() => {
                        setMessage(false);
                        console.log(localityDetails);
                    }}
                />
            )}
        </div>
    );

}

export default Locality;