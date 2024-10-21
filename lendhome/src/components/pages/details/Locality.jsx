import React from "react"

function locality() {
    return <div>
        <div>
        <label htmlFor="city">City*</label>
        <select name="city" id="city">
            <option value="Banglore">Banglore</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
        </select>
        <label htmlFor="locality">Locality*</label>
        <input type="text" name="locality" id="locality" placeholder="Enter Location/Society name"/>
        </div>
        <div>
            <label htmlFor="landmark">Landmark/Street*</label>
            <input type="text" id="landmark" name="landmark" placeholder="e.g. Evergreen Street"/>
        </div>
    </div>
}
export default locality;