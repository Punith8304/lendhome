import React, { useState } from "react"
import NextPage from "../nexpage/NextPage.jsx";
import Button from '@mui/material/Button';
import "../houseUploadLayout/Properties.css";
function Rental() {
    const date = new Date();
    
    const [rentalDetails, setRentalDetails] = useState({
        expected_rent: 0,
        deposit_amount: 0,
        rent_negotiable: true,
        monthly_maintenance: true,
        available_from: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate().toString().padStart(2, "0")}`,
        preferredTenants: {
            anyone: true,
            family: true,
            bachelor_female: true,
            bachelor_male: true,
            company: true
        },
        furnished: 1,
        parking: 3,
        description: ""
    })
    function handleChange(event) {
        const { name, checked } = event.target;
        const value = isNaN(event.target.value) ? event.target.value : Number(event.target.value)
        name === "monthly_maintenance" ? setRentalDetails(prev => { return { ...prev, [name]: (value === "include") } }) :
            setRentalDetails(prev => {
                return {
                    ...prev,
                    [name]: name === "rent_negotiable" ? checked : value
                }
            })
    }
    function tenantsChange(event) {
        const { name, checked } = event.target;
        setRentalDetails(prev => {
            // Update the specific tenant's value
            const updatedPreferredTenants = {
                ...prev.preferredTenants,
                [name]: checked,
            };
            // Compute the `anyone` value based on other keys
            const allOtherKeysTrue = Object.keys(updatedPreferredTenants)
                .filter(key => key !== "anyone") // Exclude "anyone" from the check
                .every(key => updatedPreferredTenants[key]); // Check if all are true
            return {
                ...prev,
                preferredTenants: {
                    ...updatedPreferredTenants,
                    anyone: allOtherKeysTrue, // Update `anyone` dynamically
                },
            };
        });
    }
    return <div>
        <div>
            Provide rental details about your property
        </div>
        <div>
            Property available for
        </div>
        <div>
            <div>
                <label htmlFor="rent-money">Expected Rent(per month)* </label>
                <input type="number" id="rent-money" name="expected_rent" placeholder="Enter rent per month" onChange={handleChange} value={rentalDetails.expected_rent} />
                <label htmlFor="deposit">Expected Deposit*</label>
                <input type="number" name="deposit_amount" id="deposit" placeholder="Enter the amount" onChange={handleChange} value={rentalDetails.deposit_amount} />
            </div>
            <div>
                <input type="checkbox" name="rent_negotiable" id="rent-negotiable" value="rent-negotiable" onChange={handleChange} checked={rentalDetails.rent_negotiable} />
                <label htmlFor="rent-negotible">Rent Negotiable</label>
            </div>
        </div>
        <div>
            <label htmlFor="monthly-maintenance">Monthly Maintenance*</label>
            <select name="monthly_maintenance" defaultValue="Select" id="monthly-maintenance" onChange={handleChange}>
                <option value="include">Maintenace Included</option>
                <option value="extra">Maintenace Extra</option>
            </select>
        </div>
        <div>
            <label htmlFor="availability">Available From*</label>
            <input id="availability" type="date" name="available_from" onChange={handleChange} value={rentalDetails.available_from} />
        </div>
        <div>
            <p>Preferred Tenants*</p>
            <input type="checkbox" id="anyone" name="anyone" onChange={tenantsChange} value="Anyone" checked={rentalDetails.preferredTenants.anyone} />
            <label htmlFor="anyone">Anyone</label>
            <input type="checkbox" id="family" name="family" onChange={tenantsChange} value="Family" checked={rentalDetails.preferredTenants.family} />
            <label htmlFor="family">Family</label>
            <input type="checkbox" id="bachelor-female" name="bachelor_female" onChange={tenantsChange} value="bachelor_female" checked={rentalDetails.preferredTenants.bachelor_female} />
            <label htmlFor="bachelor-female">Bachelor Female</label>
            <input type="checkbox" id="bachelor-male" name="bachelor_male" onChange={tenantsChange} value="bachelor_male" checked={rentalDetails.preferredTenants.bachelor_male} />
            <label htmlFor="bachelor-male">Bachelor Male</label>
            <input type="checkbox" id="company" name="company" value="Company" onChange={tenantsChange} checked={rentalDetails.preferredTenants.company} />
            <label htmlFor="company">Company</label>
        </div>
        <div>
            <label htmlFor="furnishing">Furnished*</label>
            <select name="furnished" id="furnishing" onChange={handleChange} value={rentalDetails.furnished}>
                <option value="1" selected>Fully Furnished</option>
                <option value="2">Semi Furnished</option>
                <option value="3">Unfurnished</option>
            </select>
            <label htmlFor="parking">Parking*</label>
            <select name="parking" id="parking" onChange={handleChange} value={rentalDetails.parking}>
                <option value="1">Car</option>
                <option value="2">Bike</option>
                <option value="3">Both</option>
                <option value="4">None</option>
            </select>
        </div>
        <div>
            <label htmlFor="description">Description*</label>
            <textarea name="description" id="description" style={{ resize: "none" }} placeholder="Write a few lines about your property something which is special and makes your property stand out." onChange={handleChange} value={rentalDetails.description}></textarea>
        </div>
        <NextPage details={rentalDetails} />
    </div>
}

export default Rental