import React, { useState } from "react"
import NextPage from "../nexpage/NextPage.jsx";
import Button from '@mui/material/Button';
function Locality() {
    const [localityDetails, setLocalityDetails] = useState({
        city_id: 1,
        area_name: "",
        street: ""
    })
    function handleLocalityDetailsChange(event) {
        const { name, value } = event.target;
        setLocalityDetails((prev) => {
            return {
                ...prev,
                [name]: name === "city" ? Number(value) : value
            }
        })
    }
    return <div>
        <div>
            <label htmlFor="city">City*</label>
            <select name="city_id" id="city" onChange={handleLocalityDetailsChange}>
                <option value="1" selected>Banglore</option>
                <option value="2">Chennai</option>
                <option value="3">Delhi</option>
                <option value="4">Hyderabad</option>
                <option value="5">Kolkata</option>
                <option value="6">Mumbai</option>
                <option value="7">Pune</option>
            </select>
            <label htmlFor="locality">Area*</label>
            <input type="text" name="area_name" id="locality" placeholder="Enter Area/Society name" onChange={handleLocalityDetailsChange} />
        </div>
        <div>
            <label htmlFor="landmark">Landmark/Street*</label>
            <input type="text" id="landmark" name="street" placeholder="e.g. Evergreen Street" onChange={handleLocalityDetailsChange} />
        </div>
        {!localityDetails.area_name || !localityDetails.street ? <Button variant="contained" onClick={() => alert("Fill all Details")}>Save & next</Button> : <NextPage details={localityDetails} />}
    </div>
}

export default Locality;